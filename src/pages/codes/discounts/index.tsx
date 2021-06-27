import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../../components/DataTable/DataTable'
import AdminHeader from '../../../components/Header/AdminHeader'
import { useGetAllDiscountsQuery } from '../../../generated/graphql'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'

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
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllDiscounts?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllDiscounts?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllDiscounts?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllDiscounts?.pageInfo?.endCursor])

  const userData =
    data?.getAllDiscounts?.edges?.map((edge) => ({
      code: edge.node.code,
      discount: edge.node.discount,
      quantity: edge.node.quantity,
      expireDate: moment.unix(parseInt(edge.node.expireDate || '') / 1000).format('DD-MM-YYYY'),
      email: (
        <Link href={'/users/view/' + edge.node.referrer?.id}>
          <a href={'/users/view/' + edge.node.referrer?.id}>{edge.node.referrer?.email}</a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(edge.node.createdAt || '') / 1000).format('DD-MM-YYYY'),
      updatedAt: moment.unix(parseInt(edge.node.updatedAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/categories/edit/' + edge.node.id}>
              <DropdownItem href={'/categories/edit/' + edge.node.id}>Edit</DropdownItem>
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
        newButtonLink="/categories/add"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllDiscounts?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllDiscounts?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(DiscountsIndexPage)
