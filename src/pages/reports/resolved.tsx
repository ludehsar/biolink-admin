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
    setBefore(data?.getAllResolvedReports?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllResolvedReports?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllResolvedReports?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllResolvedReports?.cursor.afterCursor])

  const userData =
    data?.getAllResolvedReports?.data.map((report) => ({
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
        title="Resolved Reports"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllResolvedReports?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllResolvedReports?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(ResolvedReportsIndexPage)
