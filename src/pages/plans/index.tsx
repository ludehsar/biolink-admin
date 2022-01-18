import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllPlansQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Id',
    selector: 'id',
  },
  {
    name: 'Plan Name',
    selector: 'name',
  },
  {
    name: 'Monthly Price',
    selector: 'monthlyPrice',
  },
  {
    name: 'Annual Price',
    selector: 'annualPrice',
  },
  {
    name: 'Enabled Status',
    selector: 'enabledStatus',
  },
  {
    name: 'Visibility Status',
    selector: 'visibilityStatus',
  },
  {
    name: 'Created',
    selector: 'createdAt',
  },
  {
    name: 'Last Updated',
    selector: 'updatedAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const PlanIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllPlansQuery({
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
    setBefore(data?.getAllPlans?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllPlans?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllPlans?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllPlans?.cursor.afterCursor])

  const userData =
    data?.getAllPlans?.data.map((plan) => ({
      id: plan.id,
      name: plan.name,
      monthlyPrice: plan.monthlyPrice,
      annualPrice: plan.annualPrice,
      enabledStatus: <Badge color="primary">{plan.enabledStatus}</Badge>,
      visibilityStatus: <Badge color="primary">{plan.visibilityStatus}</Badge>,
      createdAt: moment.unix(parseInt(plan.createdAt || '') / 1000).format('DD-MM-YYYY'),
      updatedAt: moment.unix(parseInt(plan.updatedAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/plans/details/' + plan.id}>
              <DropdownItem href={'/plans/details/' + plan.id}>View Details</DropdownItem>
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
        hasNextPage={!!data?.getAllPlans?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllPlans?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(PlanIndexPage)
