import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { useGetAllAdminsQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'
import Link from 'next/link'

const columns = [
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Country',
    selector: 'country',
  },
  {
    name: 'Admin Role',
    selector: 'adminRole',
  },
  {
    name: 'Joined',
    selector: 'createdAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const AdminsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllAdminsQuery({
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
    setBefore(data?.getAllAdmins?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllAdmins?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllAdmins?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllAdmins?.cursor.afterCursor])

  const userData =
    data?.getAllAdmins?.data.map((user) => ({
      email: user.email,
      country: user.country,
      adminRole: <Badge color="primary">{user.adminRole?.roleName || 'Not Loaded'}</Badge>,
      createdAt: moment.unix(parseInt(user.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/users/view/' + user.id}>
              <DropdownItem href={'/users/view/' + user.id}>View Details</DropdownItem>
            </Link>
            <Link href={'/users/edit/' + user.id}>
              <DropdownItem href={'/users/edit/' + user.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Admins"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllAdmins?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllAdmins?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AdminsIndexPage)
