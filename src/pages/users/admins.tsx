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
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllAdmins?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllAdmins?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllAdmins?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllAdmins?.pageInfo?.endCursor])

  const userData =
    data?.getAllAdmins?.edges?.map((edge) => ({
      email: edge.node.email,
      language: edge.node.language,
      lastIpAddress: edge.node.lastIPAddress,
      country: edge.node.country,
      adminRole: <Badge color="primary">{edge.node.adminRole?.roleName || 'Not Loaded'}</Badge>,
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
            <Link href={'/users/view/' + edge.node.id}>
              <DropdownItem href={'/users/view/' + edge.node.id}>View Details</DropdownItem>
            </Link>
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
        title="Admins"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllAdmins?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllAdmins?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AdminsIndexPage)
