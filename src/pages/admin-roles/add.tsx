import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditAdminRoleForm from '../../components/adminRoles/AddOrEditAdminRoleForm'

const AddAdminRolePage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditAdminRoleForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddAdminRolePage)
