import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import AddOrEditAdminRoleForm from '../../../components/adminRoles/AddOrEditAdminRoleForm'

const EditAdminRolePage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditAdminRoleForm variant="Edit" id={parseInt(id as string)} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditAdminRolePage)
