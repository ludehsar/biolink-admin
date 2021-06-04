import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AddOrEditUsersForm from '../../../components/users/AddOrEditUsersForm'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'

const EditUsersPage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditUsersForm variant="Edit" id={id as string} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditUsersPage)
