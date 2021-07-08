import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditCodeForm from '../../components/codes/AddOrEditCodeForm'

const AddCodePage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditCodeForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddCodePage)
