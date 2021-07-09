import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import AddOrEditUsernameForm from '../../../components/usernames/AddOrEditUsernameForm'

const EditUsernamePage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditUsernameForm variant="Edit" id={id as string} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditUsernamePage)
