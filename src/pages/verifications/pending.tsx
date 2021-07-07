import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllPendingVerificationsQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Username',
    selector: 'username',
  },
  {
    name: 'Category',
    selector: 'category',
  },
  {
    name: 'First Name',
    selector: 'firstName',
  },
  {
    name: 'Last Name',
    selector: 'lastName',
  },
  {
    name: 'Mobile Number',
    selector: 'mobileNumber',
  },
  {
    name: 'Work Number',
    selector: 'workNumber',
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Website Link',
    selector: 'websiteLink',
  },
  {
    name: 'User',
    selector: 'user',
  },
  {
    name: 'Biolink',
    selector: 'biolink',
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

const PendingVerificationsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllPendingVerificationsQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllPendingVerifications?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllPendingVerifications?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllPendingVerifications?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllPendingVerifications?.pageInfo?.endCursor])

  const userData =
    data?.getAllPendingVerifications?.edges?.map((edge) => ({
      username: edge.node.username,
      category: edge.node.category?.categoryName,
      firstName: edge.node.firstName,
      lastName: edge.node.lastName,
      mobileNumber: edge.node.mobileNumber,
      workNumber: edge.node.workNumber,
      email: edge.node.email,
      websiteLink: edge.node.websiteLink,
      user: (
        <Link href={'/users/view/' + edge.node.user?.id}>
          <a href={'/users/view/' + edge.node.user?.id}>{edge.node.user?.email}</a>
        </Link>
      ),
      biolink: (
        <Link href={'/biolinks/view/' + edge.node.biolink?.id}>
          <a href={'/biolinks/view/' + edge.node.biolink?.id}>
            {edge.node.biolink?.username?.username}
          </a>
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
            <Link href={'/verifications/details/' + edge.node.id}>
              <DropdownItem href={'/verifications/details/' + edge.node.id}>Details</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Pending Verifications"
        newButton={true}
        newButtonLink="/categories/add"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllPendingVerifications?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllPendingVerifications?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(PendingVerificationsIndexPage)
