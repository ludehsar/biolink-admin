import moment from 'moment'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'
import React, { useState, useCallback } from 'react'
import {
  Media,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import { useGetAllDirectoriesQuery } from '../../../generated/graphql'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import DataTable from '../../../components/DataTable/DataTable'
import AdminHeader from '../../../components/Header/AdminHeader'

const columns = [
  {
    name: 'Username',
    selector: 'usernameWithProfilePhoto',
  },
  {
    name: 'Full Name',
    selector: 'displayName',
  },
  {
    name: 'User',
    selector: 'email',
  },
  {
    name: 'Category',
    selector: 'category',
  },
  {
    name: 'Country',
    selector: 'country',
  },
  {
    name: 'Verification Status',
    selector: 'verificationStatus',
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

const DirectoriesIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllDirectoriesQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllDirectories?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllDirectories?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllDirectories?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllDirectories?.pageInfo?.endCursor])

  const directoryData =
    data?.getAllDirectories?.edges?.map((edge) => ({
      usernameWithProfilePhoto: (
        <Media className="align-items-center">
          <Link href="#">
            <a className="avatar rounded-circle mr-3" href="#" onClick={(e) => e.preventDefault()}>
              <img alt="Biolink User Profile" src={edge.node.profilePhotoUrl as string} />
            </a>
          </Link>
          <Media>
            <span className="mb-0 text-sm">{edge.node.username}</span>
          </Media>
        </Media>
      ),
      displayName: edge.node.displayName,
      email: (
        <Link href={'/users/view/' + edge.node.user?.id}>
          <a href={'/users/view/' + edge.node.user?.id}>{edge.node.user?.email}</a>
        </Link>
      ),
      category: edge.node.category?.categoryName,
      country: edge.node.country,
      verificationStatus: <Badge color="primary">{edge.node.verificationStatus}</Badge>,
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
        title="Directories"
        newButton={true}
        newButtonLink={'/users/add'}
        columns={columns}
        data={directoryData}
        hasNextPage={data?.getAllDirectories?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllDirectories?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(DirectoriesIndexPage)
