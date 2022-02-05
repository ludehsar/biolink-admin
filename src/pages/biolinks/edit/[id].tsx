import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AddOrEditBiolinksForm from '../../../components/biolinks/AddOrEditBiolinksForm'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'

const EditBiolinksPage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <AddOrEditBiolinksForm variant="Edit" id={id as string} />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditBiolinksPage)
