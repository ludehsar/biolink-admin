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
    name: 'Email Verified At',
    selector: 'emailVerifiedAt',
  },
  {
    name: 'Account Status',
    selector: 'accountStatus',
  },
  {
    name: 'Language',
    selector: 'language',
  },
  {
    name: 'IP Address',
    selector: 'lastIpAddress',
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
    name: '',
    selector: 'action',
  },
]

const UsersIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllUsersQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllUsers?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllUsers?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllUsers?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllUsers?.pageInfo?.endCursor])

  const userData =
    data?.getAllUsers?.edges?.map((edge) => ({
      email: edge.node.email,
      emailVerifiedAt: edge.node.emailVerifiedAt,
      accountStatus: (
        <Badge color="" className="badge-dot mr-4">
          {moment(moment.now()).isBefore(edge.node.lastActiveTill) ? (
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
      language: edge.node.language,
      lastIpAddress: edge.node.lastIPAddress,
      country: edge.node.country,
      plan: <Badge color="primary">{edge.node.plan?.name || 'Free'}</Badge>,
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
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              View Details
            </DropdownItem>
            <Link href={'/users/edit/' + edge.node.id}>
              <DropdownItem href={'/users/edit/' + edge.node.id}>Edit</DropdownItem>
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
        hasNextPage={data?.getAllUsers?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllUsers?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(UsersIndexPage)
