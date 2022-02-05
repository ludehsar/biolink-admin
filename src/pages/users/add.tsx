import React, { useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import UserForm from '../../components/users/UserForm'

const AddUserPage: NextPage = () => {
  const [step, setStep] = useState<number>(1)
  const [userId, setUserId] = useState<string>('')

  return (
    <AdminLayout>
      <AdminHeader />
      <UserForm {...{ setStep, step, userId, setUserId }} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddUserPage)
