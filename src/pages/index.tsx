import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Bar, Pie } from 'react-chartjs-2'
import { Row, Col, Container, Card, CardHeader, CardBody } from 'reactstrap'

import AdminLayout from '../layouts/Admin.layout'
import AdminHeader from '../components/Header/AdminHeader'
import { createUrqlClient } from '../utils/createUrqlClient'
import SummaryCard from '../components/SummaryCard/SummaryCard'
import {
  useGetDashboardTotalCountsQuery,
  useGetLast30DaysEarningChartDataQuery,
  useGetUsersAndAdminsCountDataQuery,
} from '../generated/graphql'
import moment from 'moment'

const IndexPage: NextPage = () => {
  const [{ data: countData }] = useGetDashboardTotalCountsQuery()
  const [{ data: last30DaysEarningData }] = useGetLast30DaysEarningChartDataQuery()
  const [{ data: usersAdminsCountData }] = useGetUsersAndAdminsCountDataQuery()

  const barData = {
    labels:
      last30DaysEarningData?.getLast30DaysEarningChartData.result?.map((data) =>
        moment.unix(parseInt(data.date || '0') / 1000).format('DD MMM')
      ) || [],
    datasets: [
      {
        label: 'Earned',
        barPercentage: 1.0,
        categoryPercentage: 0.9,
        // maxBarThickness: 32,
        data:
          last30DaysEarningData?.getLast30DaysEarningChartData.result?.map(
            (data) => data.earned || 0
          ) || [],
        backgroundColor: ['rgb(80, 137, 198)'],
        borderColor: ['rgb(80, 137, 198)'],
        borderWidth: 1,
      },
    ],
  }

  const pieData = {
    labels: ['User', 'Admin'],
    datasets: [
      {
        label: '# of Users and Admins',
        data: [
          usersAdminsCountData?.getUsersAndAdminsCountData.totalUsers,
          usersAdminsCountData?.getUsersAndAdminsCountData.totalAdmins,
        ],
        backgroundColor: ['rgb(3, 83, 151)', 'rgb(255, 170, 76)'],
        borderColor: ['rgb(3, 83, 151)', 'rgb(255, 170, 76)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <AdminLayout>
      <AdminHeader>
        <Row className="mb-4">
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalBiolinks || 0}
              title="Total Biolinks"
              icon="fas fa-book"
              iconBackgroundClassName="bg-default"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalShortenedLinks || 0}
              title="Shortened Links"
              icon="fas fa-link"
              iconBackgroundClassName="bg-warning"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalBiolinkPageViewsTracked || 0}
              title="Biolink Pageview"
              icon="fas fa-binoculars"
              iconBackgroundClassName="bg-danger"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalLinkClickViewsTracked || 0}
              title="Links Clicked"
              icon="fas fa-mouse"
              iconBackgroundClassName="bg-info"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalUsers || 0}
              title="Total Users"
              icon="fas fa-users"
              iconBackgroundClassName="bg-dark"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalReferralCodes || 0}
              title="Referral Codes"
              icon="fas fa-qrcode"
              iconBackgroundClassName="bg-primary"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalTransactionsMade || 0}
              title="Transactions"
              icon="fas fa-money-check-alt"
              iconBackgroundClassName="bg-success"
            />
          </Col>
          <Col lg="6" xl="3">
            <SummaryCard
              count={countData?.getDashboardTotalCounts.totalEarned || 0}
              title="Total Earned"
              icon="fas fa-dollar-sign"
              iconBackgroundClassName="bg-success"
            />
          </Col>
        </Row>
      </AdminHeader>
      <Container className="mt--7" fluid>
        <Row>
          <Col xl={8}>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Last 30 Days Earnings</h3>
              </CardHeader>
              <CardBody>
                <Bar data={barData} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">User / Admin</h3>
              </CardHeader>
              <CardBody>
                <Pie data={pieData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(IndexPage)
