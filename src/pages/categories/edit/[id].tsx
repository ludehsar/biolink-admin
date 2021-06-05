import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import AddOrEditCategoryForm from '../../../components/categories/AddOrEditCategoryForm'

const EditCategoryPage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditCategoryForm variant="Edit" id={parseInt(id as string)} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditCategoryPage)
