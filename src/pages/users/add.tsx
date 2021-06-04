import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditUsersForm from '../../components/users/AddOrEditUsersForm'

const AddUserPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditUsersForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddUserPage)
