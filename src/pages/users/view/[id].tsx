import React from 'react'
import ErrorPage from 'next/error'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Row, Col, Container } from 'reactstrap'

import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import { useGetUserQuery, useGetUserSummaryCountsQuery } from '../../../generated/graphql'
import SummaryCard from '../../../components/SummaryCard/SummaryCard'
import UserDetails from '../../../components/users/UserDetails'
import BillingDetails from '../../../components/users/BillingDetails'

const ViewUsersPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetUserQuery({ variables: { userId: (id as string) || '' } })
  const [{ data: userSummaryData }] = useGetUserSummaryCountsQuery({
    variables: { userId: (id as string) || '' },
  })

  return data?.getUser ? (
    <AdminLayout>
      <AdminHeader>
        <Row>
          <Col lg="6" xl="3">
            <SummaryCard
              count={userSummaryData?.getUserSummaryCounts?.totalBiolinks || 0}
              title="Biolink"
              icon="fas fa-book"
              iconBackgroundClassName="bg-default"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={userSummaryData?.getUserSummaryCounts?.totalShortenedLinks || 0}
              title="Shortened Links"
              icon="fas fa-link"
              iconBackgroundClassName="bg-warning"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={userSummaryData?.getUserSummaryCounts?.totalPayed || 0}
              title="Paid"
              icon="fas fa-dollar-sign"
              iconBackgroundClassName="bg-success"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={userSummaryData?.getUserSummaryCounts?.totalReferralCodes || 0}
              title="Codes"
              icon="fas fa-qrcode"
              iconBackgroundClassName="bg-info"
            />
          </Col>
        </Row>
      </AdminHeader>
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <UserDetails user={data.getUser} />
          </div>
        </Row>
      </Container>

      <Container className="mt-4" fluid>
        <Row>
          <div className="col">
            <BillingDetails billing={data.getUser.billing || undefined} />
          </div>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

export default withUrqlClient(createUrqlClient)(ViewUsersPage)
