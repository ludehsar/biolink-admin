import React, { useCallback, useState } from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  UncontrolledDropdown,
} from 'reactstrap'
import { useGetAllBiolinksQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'

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

const BiolinksIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllBiolinksQuery({
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
    setBefore(data?.getAllBiolinks?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllBiolinks?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllBiolinks?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllBiolinks?.cursor.afterCursor])

  const biolinkData =
    data?.getAllBiolinks?.data.map((biolink) => ({
      usernameWithProfilePhoto: (
        <Media className="align-items-center">
          <Link href="#">
            <a className="avatar rounded-circle mr-3" href="#" onClick={(e) => e.preventDefault()}>
              <img alt="Biolink Profile" src={biolink.profilePhotoUrl as string} />
            </a>
          </Link>
          <Media>
            <span className="mb-0 text-sm">{biolink.username?.username}</span>
          </Media>
        </Media>
      ),
      displayName: biolink.displayName,
      email: (
        <Link href={'/users/view/' + biolink.user?.id}>
          <a href={'/users/view/' + biolink.user?.id}>{biolink.user?.email}</a>
        </Link>
      ),
      category: biolink.category?.categoryName,
      country: biolink.country,
      verificationStatus: <Badge color="primary">{biolink.verificationStatus}</Badge>,
      createdAt: moment.unix(parseInt(biolink.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/biolinks/view/' + biolink.id}>
              <DropdownItem href={'/users/view/' + biolink.id}>View Details</DropdownItem>
            </Link>
            <Link href={'/biolinks/edit/' + biolink.id}>
              <DropdownItem href={'/users/edit/' + biolink.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Biolinks"
        newButton={true}
        newButtonLink={'/biolinks/add'}
        columns={columns}
        data={biolinkData}
        hasNextPage={!!data?.getAllBiolinks?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllBiolinks?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(BiolinksIndexPage)
