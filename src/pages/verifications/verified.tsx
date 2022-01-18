import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllVerifiedVerificationsQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Id',
    selector: 'id',
  },
  {
    name: 'Username',
    selector: 'username',
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
    name: 'Category',
    selector: 'category',
  },
  {
    name: 'Verification Status',
    selector: 'verificationStatus',
  },
  {
    name: 'Verified Email',
    selector: 'verifiedEmail',
  },
  {
    name: 'Verified Government ID',
    selector: 'verifiedGovernmentId',
  },
  {
    name: 'Verified Phone',
    selector: 'verifiedPhoneNumber',
  },
  {
    name: 'Verified Work Email',
    selector: 'verifiedWorkEmail',
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

const VerifiedVerificationsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllVerifiedVerificationsQuery({
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
    setBefore(data?.getAllVerifiedVerifications?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllVerifiedVerifications?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllVerifiedVerifications?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllVerifiedVerifications?.cursor.afterCursor])

  const userData =
    data?.getAllVerifiedVerifications?.data.map((verification) => ({
      id: verification.id,
      username: verification.username,
      user: (
        <Link href={'/users/view/' + verification.user?.id}>
          <a href={'/users/view/' + verification.user?.id}>{verification.user?.email}</a>
        </Link>
      ),
      biolink: (
        <Link href={'/biolinks/view/' + verification.biolink?.id}>
          <a href={'/biolinks/view/' + verification.biolink?.id}>{verification.username}</a>
        </Link>
      ),
      category: verification.category?.categoryName,
      verificationStatus: <Badge color="primary">{verification.verificationStatus}</Badge>,
      verifiedEmail: <Badge color="primary">{verification.verifiedEmail}</Badge>,
      verifiedGovernmentId: <Badge color="primary">{verification.verifiedGovernmentId}</Badge>,
      verifiedPhoneNumber: <Badge color="primary">{verification.verifiedPhoneNumber}</Badge>,
      verifiedWorkEmail: <Badge color="primary">{verification.verifiedWorkEmail}</Badge>,
      createdAt: moment.unix(parseInt(verification.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/verifications/details/' + verification.id}>
              <DropdownItem href={'/verifications/details/' + verification.id}>
                Details
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Verified Verifications"
        newButton={true}
        newButtonLink="/categories/add"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllVerifiedVerifications?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllVerifiedVerifications?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(VerifiedVerificationsIndexPage)
