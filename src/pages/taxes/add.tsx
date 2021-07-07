import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditTaxForm from '../../components/taxes/AddOrEditTaxForm'

const AddTaxPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditTaxForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddTaxPage)
