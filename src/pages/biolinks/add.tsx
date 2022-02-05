import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import AddOrEditBiolinksForm from '../../components/biolinks/AddOrEditBiolinksForm'
import { Container } from 'reactstrap'

const AddBiolinkPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <AddOrEditBiolinksForm variant="Add" />
      </Container>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AddBiolinkPage)
