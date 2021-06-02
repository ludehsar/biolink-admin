import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import {
  Badge,
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown,
} from 'reactstrap'
import { useGetAllPlansQuery } from '../../generated/graphql'
import Link from 'next/link'

const PlansIndexPage: NextPage = () => {
  const [{ data }] = useGetAllPlansQuery()

  return (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col>
                    <h3 className="mb-0 float-left">Plans</h3>
                    <div className="float-right">
                      <Link href="#">
                        <Button color="primary" size="sm">
                          Add New
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Monthly Price</th>
                    <th scope="col">Annual Price</th>
                    <th scope="col">Visibility Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {data?.getAllPlans.plans?.map((plan, key) => (
                    <tr key={key}>
                      <td>{plan.id}</td>
                      <td>{plan.name}</td>
                      <td>{plan.monthlyPrice}</td>
                      <td>{plan.annualPrice}</td>
                      <td>
                        {plan.visibilityStatus ? (
                          <Badge color="primary">Visible</Badge>
                        ) : (
                          <Badge color="danger">Not Visible</Badge>
                        )}
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                              View Details
                            </DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                              Edit
                            </DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(PlansIndexPage)
