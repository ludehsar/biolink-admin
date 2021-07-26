import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import AdminLayout from '../layouts/Admin.layout'
import AdminHeader from '../components/Header/AdminHeader'
import { createUrqlClient } from '../utils/createUrqlClient'
import { Row, Col } from 'reactstrap'
import SummaryCard from '../components/SummaryCard/SummaryCard'
import { useGetDashboardTotalCountsQuery } from '../generated/graphql'

const IndexPage: NextPage = () => {
  const [{ data: countData }] = useGetDashboardTotalCountsQuery()

  return (
    <AdminLayout>
      <AdminHeader>
        <Row className="mb-4">
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalBiolinks || 0}
              title="Total Biolinks"
              icon="fas fa-book"
              iconBackgroundClassName="bg-default"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalShortenedLinks || 0}
              title="Shortened Links"
              icon="fas fa-link"
              iconBackgroundClassName="bg-warning"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalBiolinkPageViewsTracked || 0}
              title="Biolinks Pageview"
              icon="fas fa-binoculars"
              iconBackgroundClassName="bg-danger"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalLinkClickViewsTracked || 0}
              title="Links Clicked"
              icon="fas fa-mouse"
              iconBackgroundClassName="bg-info"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalUsers || 0}
              title="Total Users"
              icon="fas fa-users"
              iconBackgroundClassName="bg-dark"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalReferralCodes || 0}
              title="Referral Codes"
              icon="fas fa-qrcode"
              iconBackgroundClassName="bg-primary"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalTransactionsMade || 0}
              title="Transactions"
              icon="fas fa-money-check-alt"
              iconBackgroundClassName="bg-success"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.result?.totalEarned || 0}
              title="Total Earned"
              icon="fas fa-dollar-sign"
              iconBackgroundClassName="bg-success"
            />
          </Col>
        </Row>
      </AdminHeader>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(IndexPage)
