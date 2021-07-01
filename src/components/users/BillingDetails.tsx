import React from 'react'
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { Billing } from '../../generated/graphql'

export interface BillingDetailsProps {
  billing?: Billing
}

const BillingDetails: React.FC<BillingDetailsProps> = ({ billing }) => (
  <Card className="shadow">
    <CardHeader className="bg-transparent">
      <h3 className="mb-0">Billing Details</h3>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={billing?.name || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="type">Account Type</Label>
            <Input
              type="text"
              name="type"
              id="type"
              value={billing?.type || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="phone">Contact Number</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              value={billing?.phone || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="address1">Address 1</Label>
            <Input
              type="text"
              name="address1"
              id="address1"
              value={billing?.address1 || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="address2">Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="address2"
              value={billing?.address2 || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xl={3}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              value={billing?.city || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={3}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              type="text"
              name="state"
              id="state"
              value={billing?.state || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={3}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              type="text"
              name="country"
              id="country"
              value={billing?.country || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={3}>
          <FormGroup>
            <Label for="zip">Zip</Label>
            <Input
              type="text"
              name="zip"
              id="zip"
              value={billing?.zip || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
    </CardBody>
  </Card>
)

export default BillingDetails
