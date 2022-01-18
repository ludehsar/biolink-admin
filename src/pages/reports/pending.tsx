import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllPendingReportsQuery } from '../../generated/graphql'
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

const PendingReportsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllPendingReportsQuery({
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
    setBefore(data?.getAllPendingReports?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllPendingReports?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllPendingReports?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllPendingReports?.cursor.afterCursor])

  const userData =
    data?.getAllPendingReports?.data.map((report) => ({
      firstName: report.firstName,
      lastName: report.lastName,
      email: report.email,
      reportedUrl: report.reportedUrl,
      reporter: (
        <Link href={'/users/view/' + report.reporter?.id}>
          <a href={'/users/view/' + report.reporter?.id}>{report.reporter?.email}</a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(report.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/reports/details/' + report.id}>
              <DropdownItem href={'/reports/details/' + report.id}>Details</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Pending Reports"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllPendingReports?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllPendingReports?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(PendingReportsIndexPage)
