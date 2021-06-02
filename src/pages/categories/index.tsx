import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { useGetAlLCategoriesQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'

const columns = [
  {
    name: 'ID',
    selector: 'id',
  },
  {
    name: 'Category Name',
    selector: 'categoryName',
  },
  {
    name: 'Created At',
    selector: 'createdAt',
  },
  {
    name: 'Updated At',
    selector: 'updatedAt',
  },
]

const CategoriesIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAlLCategoriesQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllCategories?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllCategories?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllCategories?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllCategories?.pageInfo?.endCursor])

  const userData =
    data?.getAllCategories?.edges?.map((edge) => ({
      id: edge.node.id,
      categoryName: edge.node.categoryName,
      createdAt: moment.unix(parseInt(edge.node.createdAt || '') / 1000).toLocaleString(),
      updatedAt: moment.unix(parseInt(edge.node.updatedAt || '') / 1000).toLocaleString(),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Categories"
        newButton={true}
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllCategories?.pageInfo.hasNextPage || false}
        hasPreviousPage={data?.getAllCategories?.pageInfo.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(CategoriesIndexPage)
