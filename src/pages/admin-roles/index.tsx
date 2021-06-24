import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import {
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
import Link from 'next/link'
import moment from 'moment'
import { useGetAllAdminRolesQuery } from '../../generated/graphql'

const AdminRolesIndexPage: NextPage = () => {
  const [{ data }] = useGetAllAdminRolesQuery()

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
                    <h3 className="mb-0 float-left">Admin Roles</h3>
                    <div className="float-right">
                      <Link href="/admin-roles/add">
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
                    <th scope="col">Role Name</th>
                    <th scope="col">Role Description</th>
                    <th scope="col">Role Created At</th>
                    <th scope="col">Role Updated At</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {data?.getAllAdminRoles.adminRoles?.map((role, key) => (
                    <tr key={key}>
                      <td>{role.id}</td>
                      <td>{role.roleName}</td>
                      <td>{role.roleDescription}</td>
                      <td>
                        {moment.unix(parseInt(role.createdAt || '') / 1000).format('DD-MM-YYYY')}
                      </td>
                      <td>
                        {moment.unix(parseInt(role.updatedAt || '') / 1000).format('DD-MM-YYYY')}
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
                            <Link href={'/admin-roles/edit/' + role.id}>
                              <DropdownItem href={'/admin-roles/edit/' + role.id}>
                                Edit
                              </DropdownItem>
                            </Link>
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

export default withUrqlClient(createUrqlClient)(AdminRolesIndexPage)
