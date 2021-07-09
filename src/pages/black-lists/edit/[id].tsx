import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import AddOrEditBlackListForm from '../../../components/blackLists/AddOrEditBlackListForm'

const EditBlackListPage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditBlackListForm variant="Edit" id={parseInt((id as string) || '0')} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditBlackListPage)
