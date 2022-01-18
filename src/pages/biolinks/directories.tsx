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

import { useGetAllDirectoriesQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'

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
    setBefore(data?.getAllDirectories?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllDirectories?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllDirectories?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllDirectories?.cursor.afterCursor])

  const directoryData =
    data?.getAllDirectories?.data.map((directory) => ({
      usernameWithProfilePhoto: (
        <Media className="align-items-center">
          <Link href="#">
            <a className="avatar rounded-circle mr-3" href="#" onClick={(e) => e.preventDefault()}>
              <img alt="Biolink User Profile" src={directory.profilePhotoUrl as string} />
            </a>
          </Link>
          <Media>
            <span className="mb-0 text-sm">{directory.username?.username}</span>
          </Media>
        </Media>
      ),
      displayName: directory.displayName,
      email: (
        <Link href={'/users/view/' + directory.user?.id}>
          <a href={'/users/view/' + directory.user?.id}>{directory.user?.email}</a>
        </Link>
      ),
      category: directory.category?.categoryName,
      country: directory.country,
      verificationStatus: <Badge color="primary">{directory.verificationStatus}</Badge>,
      createdAt: moment.unix(parseInt(directory.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/biolinks/view/' + directory.id}>
              <DropdownItem href={'/users/view/' + directory.id}>View Details</DropdownItem>
            </Link>
            <Link href={'/users/edit/' + directory.id}>
              <DropdownItem href={'/users/edit/' + directory.id}>Edit</DropdownItem>
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
        hasNextPage={!!data?.getAllDirectories?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllDirectories?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(DirectoriesIndexPage)
