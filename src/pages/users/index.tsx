import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import {
  Container,
  Row,
  Card,
  CardHeader,
  Table,
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Col,
  Input,
  InputGroup,
} from 'reactstrap'
import { useGetAllUsersQuery } from '../../generated/graphql'

const UsersIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllUsersQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllUsers?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllUsers?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllUsers?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllUsers?.pageInfo?.endCursor])

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
                    <h3 className="mb-0 float-left">User Accounts</h3>
                    <div className="float-right">
                      <Button color="primary" size="sm">
                        Add New
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="float-right pt-3">
                      <InputGroup>
                        <Input
                          className="form-control border-end-0 border"
                          type="search"
                          placeholder="Search..."
                          onChange={(e) => setSearchText(e.target.value)}
                          id="example-search-input"
                        />
                        <span className="input-group-append">
                          <Button
                            color="outline-secondary"
                            className="bg-white border-start-0 border-bottom-0 border ms-n5"
                            type="button"
                          >
                            <i className="fa fa-search"></i>
                          </Button>
                        </span>
                      </InputGroup>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                    <th scope="col">Billing Type</th>
                    <th scope="col">Account Status</th>
                    <th scope="col">Current Plan</th>
                    <th scope="col">IP Address</th>
                    <th scope="col">Country</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {data?.getAllUsers?.edges?.map((edge, key) => (
                    <tr key={key}>
                      <th scope="row">{edge.node.email}</th>
                      <td>{edge.node.billing?.name}</td>
                      <td>{edge.node.billing?.type}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          {edge.node.accountStatus === 'Active' ? (
                            <i className="bg-success" />
                          ) : (
                            <i className="bg-danger" />
                          )}
                          {edge.node.accountStatus}
                        </Badge>
                      </td>
                      <td>
                        <Badge color="primary">{edge.node.plan?.name || 'Free'}</Badge>
                      </td>
                      <td>{edge.node.lastIPAddress}</td>
                      <td>{edge.node.country}</td>
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
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem
                      className={data?.getAllUsers?.pageInfo?.hasPreviousPage ? '' : 'disabled'}
                    >
                      <PaginationLink href="#prev" onClick={gotoPrevPage} tabIndex={-1}>
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem
                      className={data?.getAllUsers?.pageInfo?.hasNextPage ? '' : 'disabled'}
                    >
                      <PaginationLink href="#next" onClick={gotoNextPage}>
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(UsersIndexPage)
