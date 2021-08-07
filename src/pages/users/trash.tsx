import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { useGetAllDeletedUsersQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'

const columns = [
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Last Active',
    selector: 'lastActiveTill',
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
    name: 'Joined',
    selector: 'createdAt',
  },
  {
    name: 'Deleted at',
    selector: 'deletedAt',
  },
]

const DeletedUsersIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllDeletedUsersQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllDeletedUsers?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllDeletedUsers?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllDeletedUsers?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllDeletedUsers?.pageInfo?.endCursor])

  const userData =
    data?.getAllDeletedUsers?.edges?.map((edge) => ({
      email: edge.node.email,
      lastActiveTill: moment
        .unix(parseInt(edge.node.lastActiveTill || '') / 1000)
        .format('DD-MM-YYYY HH:mm:ss'),
      language: edge.node.language,
      lastIpAddress: edge.node.lastIPAddress,
      country: edge.node.country,
      createdAt: moment.unix(parseInt(edge.node.createdAt || '') / 1000).format('DD-MM-YYYY'),
      deletedAt: moment.unix(parseInt(edge.node.deletedAt || '') / 1000).format('DD-MM-YYYY'),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="User"
        newButton={false}
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllDeletedUsers?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllDeletedUsers?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(DeletedUsersIndexPage)
