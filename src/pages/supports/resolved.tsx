import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllResolvedSupportsQuery } from '../../generated/graphql'
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

const ResolvedSupportsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllResolvedSupportsQuery({
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
    setBefore(data?.getAllResolvedSupports?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllResolvedSupports?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllResolvedSupports?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllResolvedSupports?.cursor.afterCursor])

  const userData =
    data?.getAllResolvedSupports?.data.map((support) => ({
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
        title="Resolved Supports"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllResolvedSupports?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllResolvedSupports?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(ResolvedSupportsIndexPage)
