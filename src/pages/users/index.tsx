import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'
import Link from 'next/link'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { useGetAllUsersQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'

const columns = [
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Account Status',
    selector: 'accountStatus',
  },
  {
    name: 'Country',
    selector: 'country',
  },
  {
    name: 'Current Plan',
    selector: 'plan',
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

const UsersIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllUsersQuery({
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
    setBefore(data?.getAllUsers?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllUsers?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllUsers?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllUsers?.cursor.afterCursor])

  const userData =
    data?.getAllUsers?.data.map((user) => ({
      email: user.email,
      accountStatus: (
        <Badge color="" className="badge-dot mr-4">
          {user.lastActiveTill &&
          moment(moment.now()).isBefore(moment.unix(parseInt(user.lastActiveTill || '') / 1000)) ? (
            <>
              <i className="bg-success" /> Active
            </>
          ) : (
            <>
              <i className="bg-danger" /> Inactive
            </>
          )}
        </Badge>
      ),
      country: user.country,
      plan: <Badge color="primary">{user.plan?.name || 'Free'}</Badge>,
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
        title="User"
        newButton={true}
        newButtonLink={'/users/add'}
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllUsers?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllUsers?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(UsersIndexPage)
