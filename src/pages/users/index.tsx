import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { Badge } from 'reactstrap'
import { useGetAllUsersQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'

const columns = [
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Email Verified At',
    selector: 'emailVerifiedAt',
  },
  {
    name: 'Account Status',
    selector: 'accountStatus',
  },
  {
    name: 'Language',
    selector: 'language',
  },
  {
    name: 'IP Address',
    selector: 'lastIpAddress',
  },
  {
    name: 'Country',
    selector: 'country',
  },
  {
    name: 'Current Plan',
    selector: 'plan',
  },
]

const UsersIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllUsersQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllUsers?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllUsers?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllUsers?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllUsers?.pageInfo?.endCursor])

  const userData =
    data?.getAllUsers?.edges?.map((edge) => ({
      email: edge.node.email,
      emailVerifiedAt: edge.node.emailVerifiedAt,
      accountStatus: (
        <Badge color="" className="badge-dot mr-4">
          {edge.node.accountStatus === 'Active' ? (
            <i className="bg-success" />
          ) : (
            <i className="bg-danger" />
          )}
          {edge.node.accountStatus}
        </Badge>
      ),
      language: edge.node.language,
      lastIpAddress: edge.node.lastIPAddress,
      country: edge.node.country,
      plan: <Badge color="primary">{edge.node.plan?.name || 'Free'}</Badge>,
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="User"
        newButton={true}
        newButtonLink={'/users/add'}
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllUsers?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllUsers?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(UsersIndexPage)
