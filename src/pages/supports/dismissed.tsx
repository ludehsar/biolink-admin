import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllDismissedSupportsQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Full Name',
    selector: 'fullName',
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Phone Number',
    selector: 'phoneNumber',
  },
  {
    name: 'Company',
    selector: 'company',
  },
  {
    name: 'Subject',
    selector: 'subject',
  },
  {
    name: 'User',
    selector: 'user',
  },
  {
    name: 'Created',
    selector: 'createdAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const DismissedSupportsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllDismissedSupportsQuery({
    variables: {
      options: {
        limit: 10,
        afterCursor: after,
        beforeCursor: before,
        query: searchText,
        order: 'ASC',
      },
    },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllDismissedSupports?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllDismissedSupports?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllDismissedSupports?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllDismissedSupports?.cursor.afterCursor])

  const userData =
    data?.getAllDismissedSupports?.data.map((support) => ({
      fullName: support.fullName,
      email: support.email,
      phoneNumber: support.phoneNumber,
      company: support.company,
      subject: support.subject,
      user: (
        <Link href={'/users/view/' + support.user?.id}>
          <a href={'/users/view/' + support.user?.id}>{support.user?.email}</a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(support.createdAt || '') / 1000).format('DD-MM-YYYY'),
      action: (
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <Link href={'/supports/details/' + support.id}>
              <DropdownItem href={'/supports/details/' + support.id}>Details</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Dismissed Supports"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllDismissedSupports?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllDismissedSupports?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(DismissedSupportsIndexPage)
