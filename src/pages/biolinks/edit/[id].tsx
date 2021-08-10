import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Col, Container, Row } from 'reactstrap'

import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import { useGetBiolinkQuery } from '../../../generated/graphql'
import UserHeader from '../../../components/Header/UserHeader'
import BiolinkEditCard from '../../../components/biolinks/BiolinkEditCard'

const EditBiolinkPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetBiolinkQuery({ variables: { id: (id as string) || '' } })

  return data?.getBiolink?.biolink ? (
    <AdminLayout>
      <UserHeader coverPhotoUrl={data.getBiolink.biolink.coverPhotoUrl || undefined} />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <Col xl="8">
            <BiolinkEditCard biolink={data.getBiolink.biolink} />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

export default withUrqlClient(createUrqlClient)(EditBiolinkPage)
