import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllResolvedReportsQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'First Name',
    selector: 'firstName',
  },
  {
    name: 'Last Name',
    selector: 'lastName',
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Reported URL',
    selector: 'reportedUrl',
  },
  {
    name: 'Reporter',
    selector: 'reporter',
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

const ResolvedReportsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllResolvedReportsQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllResolvedReports?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllResolvedReports?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllResolvedReports?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllResolvedReports?.pageInfo?.endCursor])

  const userData =
    data?.getAllResolvedReports?.edges?.map((edge) => ({
      firstName: edge.node.firstName,
      lastName: edge.node.lastName,
      email: edge.node.email,
      reportedUrl: edge.node.reportedUrl,
      reporter: (
        <Link href={'/users/view/' + edge.node.reporter?.id}>
          <a href={'/users/view/' + edge.node.reporter?.id}>{edge.node.reporter?.email}</a>
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
            <Link href={'/categories/edit/' + edge.node.id}>
              <DropdownItem href={'/categories/edit/' + edge.node.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Resolved Reports"
        newButton={true}
        newButtonLink="/categories/add"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllResolvedReports?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllResolvedReports?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(ResolvedReportsIndexPage)
