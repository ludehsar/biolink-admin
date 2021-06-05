import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditCategoryForm from '../../components/categories/AddOrEditCategoryForm'

const AddCategoryPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditCategoryForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddCategoryPage)
