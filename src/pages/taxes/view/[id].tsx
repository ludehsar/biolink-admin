import React from 'react'
import { NextPage } from 'next'
import ErrorPage from 'next/error'
import { withUrqlClient } from 'next-urql'
import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useGetTaxQuery } from '../../../generated/graphql'
import { useRouter } from 'next/router'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Button,
} from 'reactstrap'
import Link from 'next/link'

const ViewTaxPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data }] = useGetTaxQuery({ variables: { taxId: id as string } })

  return data?.getTax ? (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row className="d-flex justify-content-center">
          <Col xl="9">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Tax Details</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link href={'/taxes/edit/' + data.getTax.id}>
                      <Button color="primary" href={'/taxes/edit/' + data.getTax.id} size="sm">
                        Edit
                      </Button>
                    </Link>
                    <Link href={'/taxes/delete/' + data.getTax.id}>
                      <Button color="danger" href={'/taxes/delete/' + data.getTax.id} size="sm">
                        Delete
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h6 className="heading-small text-muted mb-4">Tax Information</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="internalName">
                          Internal Name
                        </label>
                        <Input
                          type="text"
                          name="internalName"
                          className="bg-white form-control-alternative"
                          id="internalName"
                          value={data.getTax.internalName || ''}
                          placeholder="Internal Name"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="name">
                          Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          className="bg-white form-control-alternative"
                          id="name"
                          value={data.getTax.name || ''}
                          placeholder="Full Name"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="description">
                          Description
                        </label>
                        <Input
                          type="textarea"
                          name="description"
                          className="bg-white form-control-alternative"
                          id="description"
                          rows="4"
                          value={data.getTax.description || ''}
                          placeholder="Description"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="value">
                          Value
                        </label>
                        <Input
                          type="number"
                          name="value"
                          className="bg-white form-control-alternative"
                          id="value"
                          value={data.getTax.value || 0}
                          placeholder="Value"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="valueType">
                          Value Type
                        </label>
                        <Input
                          type="text"
                          name="valueType"
                          className="bg-white form-control-alternative"
                          id="valueType"
                          value={data.getTax.valueType || ''}
                          placeholder="Value Type"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="type">
                          Type
                        </label>
                        <Input
                          type="text"
                          name="type"
                          className="bg-white form-control-alternative"
                          id="type"
                          value={data.getTax.type || ''}
                          placeholder="Type"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="billingFor">
                          Billing For
                        </label>
                        <Input
                          type="text"
                          name="billingFor"
                          className="bg-white form-control-alternative"
                          id="billingFor"
                          value={data.getTax.billingFor || ''}
                          placeholder="Type"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="countries">
                          Countries
                        </label>
                        <div>
                          {(data.getTax.countries?.split(',') || []).map((country, id) => (
                            <span className="badge badge-primary my-2 mr-2" key={id}>
                              {country}
                            </span>
                          ))}
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

export default withUrqlClient(createUrqlClient)(ViewTaxPage)
