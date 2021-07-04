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
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllResolvedSupports?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllResolvedSupports?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllResolvedSupports?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllResolvedSupports?.pageInfo?.endCursor])

  const userData =
    data?.getAllResolvedSupports?.edges?.map((edge) => ({
      fullName: edge.node.fullName,
      email: edge.node.email,
      phoneNumber: edge.node.phoneNumber,
      company: edge.node.company,
      subject: edge.node.subject,
      user: (
        <Link href={'/users/view/' + edge.node.user?.id}>
          <a href={'/users/view/' + edge.node.user?.id}>{edge.node.user?.email}</a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(edge.node.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/supports/details/' + edge.node.id}>
              <DropdownItem href={'/supports/details/' + edge.node.id}>Details</DropdownItem>
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
        hasNextPage={data?.getAllResolvedSupports?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllResolvedSupports?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(ResolvedSupportsIndexPage)
