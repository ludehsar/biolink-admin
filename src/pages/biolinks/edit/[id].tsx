import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AddOrEditBiolinksForm from '../../../components/biolinks/AddOrEditBiolinksForm'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import { Container } from 'reactstrap'

const EditBiolinksPage: NextPage = () => {
  const router = useRouter()

  const { id } = router.query
  return (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <AddOrEditBiolinksForm variant="Edit" id={id as string} />
      </Container>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EditBiolinksPage)
