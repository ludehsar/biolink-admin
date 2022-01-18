import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { Col, Container, Row } from 'reactstrap'

import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useGetPaymentQuery } from '../../../generated/graphql'
import AdminHeader from '../../../components/Header/AdminHeader'
import PaymentDetails from '../../../components/payments/PaymentDetails'

const PaymentDetailsPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetPaymentQuery({
    variables: { paymentId: (id as string) || '' },
  })

  return data?.getPayment ? (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <Col xl="9">
            <PaymentDetails payment={data.getPayment} />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

export default withUrqlClient(createUrqlClient)(PaymentDetailsPage)
