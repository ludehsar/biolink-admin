import Link from 'next/link'
import React from 'react'
import { Card, CardHeader, Row, Col, Button, CardBody, Form, FormGroup, Input } from 'reactstrap'
import { Biolink } from '../../generated/graphql'

export interface BiolinkDetailsCardProps {
  biolink?: Biolink
}

const BiolinkDetailsCard: React.FC<BiolinkDetailsCardProps> = ({ biolink }) => (
  <Card className="bg-secondary shadow">
    <CardHeader className="bg-white border-0">
      <Row className="align-items-center">
        <Col xs="8">
          <h3 className="mb-0">Biolink Profile</h3>
        </Col>
        <Col className="text-right" xs="4">
          <Link href={'/biolinks/edit/' + biolink?.id}>
            <Button color="primary" href={'/biolinks/edit/' + biolink?.id} size="sm">
              Edit
            </Button>
          </Link>
          <Link href={'/biolinks/delete/' + biolink?.id}>
            <Button color="danger" href={'/biolinks/delete/' + biolink?.id} size="sm">
              Delete
            </Button>
          </Link>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <Form>
        <h6 className="heading-small text-muted mb-4">User Information</h6>
        <div className="pl-lg-4">
          <Row>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-name">
                  Full Name
                </label>
                <Input
                  className="bg-white form-control-alternative"
                  value={biolink?.displayName || ''}
                  id="input-name"
                  placeholder="Full Name"
                  type="text"
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-username">
                  Username
                </label>
                <Input
                  className="bg-white form-control-alternative"
                  value={biolink?.username?.username || ''}
                  id="input-username"
                  placeholder="Username"
                  type="text"
                  readOnly
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-category">
                  Category
                </label>
                <Input
                  className="bg-white form-control-alternative"
                  value={biolink?.category?.categoryName || ''}
                  id="input-category"
                  placeholder="Category"
                  type="text"
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <hr className="my-4" />
        {/* Address */}
        <h6 className="heading-small text-muted mb-4">Contact information</h6>
        <div className="pl-lg-4">
          <Row>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-city">
                  City
                </label>
                <Input
                  className="bg-white form-control-alternative"
                  value={biolink?.city || ''}
                  id="input-city"
                  placeholder="City"
                  type="text"
                  readOnly
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-state">
                  State
                </label>
                <Input
                  className="bg-white form-control-alternative"
                  value={biolink?.state || ''}
                  id="input-state"
                  placeholder="State"
                  type="text"
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Country
                </label>
                <Input
                  className="bg-white form-control-alternative"
                  value={biolink?.country || ''}
                  id="input-country"
                  placeholder="Country"
                  type="text"
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <hr className="my-4" />
        {/* Description */}
        <h6 className="heading-small text-muted mb-4">About Section</h6>
        <div className="pl-lg-4">
          <FormGroup>
            <label className="form-control-label" htmlFor="input-bio">
              Bio
            </label>
            <Input
              className="bg-white form-control-alternative"
              value={biolink?.bio || ''}
              id="input-bio"
              placeholder="Profile Bio"
              rows="4"
              type="textarea"
              readOnly
            />
          </FormGroup>
        </div>
      </Form>
    </CardBody>
  </Card>
)

export default BiolinkDetailsCard
