import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditBiolinksForm from '../../components/biolinks/AddOrEditBiolinksForm'

const AddBiolinkPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditBiolinksForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddBiolinkPage)
