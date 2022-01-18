import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllDiscountsQuery } from '../../generated/graphql'
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

const DiscountsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllDiscountsQuery({
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
    setBefore(data?.getAllDiscounts?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllDiscounts?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllDiscounts?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllDiscounts?.cursor.afterCursor])

  const userData =
    data?.getAllDiscounts?.data.map((discount) => ({
      code: discount.code,
      discount: discount.discount,
      quantity: discount.quantity,
      expireDate: moment(discount.expireDate).format('DD-MM-YYYY'),
      email: (
        <Link href={'/users/view/' + discount.referrer?.id}>
          <a href={'/users/view/' + discount.referrer?.id}>{discount.referrer?.email}</a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(discount.createdAt || '') / 1000).format('DD-MM-YYYY'),
      updatedAt: moment.unix(parseInt(discount.updatedAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/codes/edit/' + discount.id}>
              <DropdownItem href={'/codes/edit/' + discount.id}>Edit</DropdownItem>
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
        hasNextPage={!!data?.getAllDiscounts?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllDiscounts?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(DiscountsIndexPage)
