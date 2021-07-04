import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllDismissedReportsQuery } from '../../generated/graphql'
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

const DismissedReportsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllDismissedReportsQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllDismissedReports?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllDismissedReports?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllDismissedReports?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllDismissedReports?.pageInfo?.endCursor])

  const userData =
    data?.getAllDismissedReports?.edges?.map((edge) => ({
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
            <Link href={'/reports/details/' + edge.node.id}>
              <DropdownItem href={'/reports/details/' + edge.node.id}>Details</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Dismissed Reports"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllDismissedReports?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllDismissedReports?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(DismissedReportsIndexPage)
