import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllTaxesQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Internal Name',
    selector: 'internalName',
  },
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Value',
    selector: 'value',
  },
  {
    name: 'Value Type',
    selector: 'valueType',
  },
  {
    name: 'Type',
    selector: 'type',
  },
  {
    name: 'Billing For',
    selector: 'billingFor',
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

const TaxesIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllTaxesQuery({
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
    setBefore(data?.getAllTaxes?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllTaxes?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllTaxes?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllTaxes?.cursor.afterCursor])

  const userData =
    data?.getAllTaxes?.data.map((tax) => ({
      internalName: tax.internalName,
      name: tax.name,
      value: tax.value,
      valueType: tax.valueType,
      type: tax.type,
      billingFor: tax.billingFor,
      createdAt: moment.unix(parseInt(tax.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/taxes/view/' + tax.id}>
              <DropdownItem href={'/taxes/view/' + tax.id}>View Details</DropdownItem>
            </Link>
            <Link href={'/taxes/edit/' + tax.id}>
              <DropdownItem href={'/taxes/edit/' + tax.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Taxes"
        newButton={true}
        newButtonLink="/taxes/add"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllTaxes?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllTaxes?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(TaxesIndexPage)
