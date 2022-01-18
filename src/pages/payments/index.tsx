import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllPaymentsQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'User',
    selector: 'email',
  },
  {
    name: 'Payment Provider',
    selector: 'paymentProvider',
  },
  {
    name: 'Amount Paid',
    selector: 'amountPaid',
  },
  {
    name: 'Payment Currency.',
    selector: 'paymentCurrency',
  },
  {
    name: 'Payment Type',
    selector: 'paymentType',
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

const StripePaymentsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllPaymentsQuery({
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
    setBefore(data?.getAllPayments?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllPayments?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllPayments?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllPayments?.cursor.afterCursor])

  const userData =
    data?.getAllPayments?.data.map((payment) => ({
      email: (
        <Link href={'/users/view/' + payment.user?.id}>
          <a href={'/users/view/' + payment.user?.id}>{payment.user?.email}</a>
        </Link>
      ),
      paymentProvider: payment.paymentProvider,
      amountPaid: payment.amountPaid,
      paymentCurrency: payment.paymentCurrency,
      paymentType: <Badge color="primary">{payment.paymentType}</Badge>,
      createdAt: moment.unix(parseInt(payment.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/payments/details/' + payment.id}>
              <DropdownItem href={'/payments/details/' + payment.id}>View Details</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Stripe Payments"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllPayments?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllPayments?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(StripePaymentsIndexPage)
