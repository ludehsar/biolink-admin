import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import AddOrEditTaxForm from '../../../components/taxes/AddOrEditTaxForm'

const EditTaxPage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditTaxForm variant="Edit" id={parseInt((id as string) || '0')} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditTaxPage)
