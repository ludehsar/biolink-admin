import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditBlackListForm from '../../components/blackLists/AddOrEditBlackListForm'

const AddBlackListPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditBlackListForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddBlackListPage)
