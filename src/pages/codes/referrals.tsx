import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllReferralsQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Code',
    selector: 'code',
  },
  {
    name: 'Discount',
    selector: 'discount',
  },
  {
    name: 'Quantity',
    selector: 'quantity',
  },
  {
    name: 'Expire Date',
    selector: 'expireDate',
  },
  {
    name: 'Referrer',
    selector: 'email',
  },
  {
    name: 'Created',
    selector: 'createdAt',
  },
  {
    name: 'Updated',
    selector: 'updatedAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const ReferralsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllReferralsQuery({
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
    setBefore(data?.getAllReferrals?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllReferrals?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllReferrals?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllReferrals?.cursor.afterCursor])

  const userData =
    data?.getAllReferrals?.data.map((referral) => ({
      code: referral.code,
      discount: referral.discount,
      quantity: referral.quantity,
      expireDate: moment(referral.expireDate).format('DD-MM-YYYY'),
      email: (
        <Link href={'/users/view/' + referral.referrer?.id}>
          <a href={'/users/view/' + referral.referrer?.id}>{referral.referrer?.email}</a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(referral.createdAt || '') / 1000).format('DD-MM-YYYY'),
      updatedAt: moment.unix(parseInt(referral.updatedAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/codes/edit/' + referral.id}>
              <DropdownItem href={'/codes/edit/' + referral.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Discounts"
        newButton={true}
        newButtonLink="/codes/add"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllReferrals?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllReferrals?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(ReferralsIndexPage)
