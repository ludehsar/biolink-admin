import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllStripePaymentsQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Invoice No.',
    selector: 'stripeInvoiceNumber',
  },
  {
    name: 'User',
    selector: 'email',
  },
  {
    name: 'Amount Due',
    selector: 'stripeAmountDue',
  },
  {
    name: 'Amount Paid',
    selector: 'stripeAmountPaid',
  },
  {
    name: 'Amount Remaining',
    selector: 'stripeAmountRemaining',
  },
  {
    name: 'Discount',
    selector: 'stripeDiscount',
  },
  {
    name: 'Charge ID',
    selector: 'stripeChargeId',
  },
  {
    name: 'Invoice Created',
    selector: 'stripeInvoiceCreated',
  },
  {
    name: 'Customer ID',
    selector: 'stripeCustomerId',
  },
  {
    name: 'Customer Email',
    selector: 'stripeCustomerEmail',
  },
  {
    name: 'Customer Name',
    selector: 'stripeCustomerName',
  },
  {
    name: 'Customer Phone',
    selector: 'stripeCustomerPhone',
  },
  {
    name: 'Stripe Price ID',
    selector: 'stripePriceId',
  },
  {
    name: 'Stripe Subscription ID',
    selector: 'stripeSubscriptionId',
  },
  {
    name: 'Status',
    selector: 'stripeStatus',
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
  const [{ data }] = useGetAllStripePaymentsQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllStripePayments?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllStripePayments?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllStripePayments?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllStripePayments?.pageInfo?.endCursor])

  const userData =
    data?.getAllStripePayments?.edges?.map((edge) => ({
      stripeInvoiceNumber: edge.node.stripeInvoiceNumber,
      email: (
        <Link href={'/users/view/' + edge.node.user?.id}>
          <a href={'/users/view/' + edge.node.user?.id}>{edge.node.user?.email}</a>
        </Link>
      ),
      stripeAmountDue: ((edge.node.stripeAmountDue || 0) / 100).toString() + '$',
      stripeAmountPaid: ((edge.node.stripeAmountPaid || 0) / 100).toString() + '$',
      stripeAmountRemaining: ((edge.node.stripeAmountRemaining || 0) / 100).toString() + '$',
      stripeDiscount: edge.node.stripeDiscount,
      stripeChargeId: edge.node.stripeChargeId,
      stripeInvoiceCreated: moment
        .unix(parseInt(edge.node.stripeInvoiceCreated || ''))
        .format('DD-MM-YYYY'),
      stripeCustomerId: edge.node.stripeCustomerId,
      stripeCustomerEmail: edge.node.stripeCustomerEmail,
      stripeCustomerName: edge.node.stripeCustomerName,
      stripeCustomerPhone: edge.node.stripeCustomerPhone,
      stripePriceId: edge.node.stripePriceId,
      stripeSubscriptionId: edge.node.stripeSubscriptionId,
      stripeStatus: <Badge color="primary">{edge.node.stripeStatus}</Badge>,
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
            <Link href={'/categories/view/' + edge.node.id}>
              <DropdownItem href={'/categories/view/' + edge.node.id}>View Details</DropdownItem>
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
        hasNextPage={data?.getAllStripePayments?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllStripePayments?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(StripePaymentsIndexPage)
