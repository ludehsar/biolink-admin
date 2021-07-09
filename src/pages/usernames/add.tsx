import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditUsernameForm from '../../components/usernames/AddOrEditUsernameForm'

const AddUsernamePage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditUsernameForm variant="Add" />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddUsernamePage)
