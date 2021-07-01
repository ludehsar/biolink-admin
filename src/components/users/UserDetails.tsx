import moment from 'moment'
import React from 'react'
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { User } from '../../generated/graphql'

export interface UserDetailsProps {
  user?: User
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
  <Card className="shadow">
    <CardHeader className="bg-transparent">
      <h3 className="mb-0">User Details</h3>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="adminRole">Priviledges</Label>
            <Input
              type="text"
              name="adminRole"
              id="adminRole"
              value={user?.adminRole?.roleName || 'User'}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={user?.email || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              type="text"
              name="country"
              id="country"
              value={user?.country || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="emailVerifiedAt">Email Verified At</Label>
            <Input
              type="datetime"
              name="emailVerifiedAt"
              id="emailVerifiedAt"
              value={moment
                .unix(parseInt(user?.emailVerifiedAt || '') / 1000)
                .format('DD-MM-YYYY HH:mm:ss')}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="language">Language</Label>
            <Input
              type="text"
              name="language"
              id="language"
              value={user?.language || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="status">Active Status</Label>
            <Input
              type="text"
              name="status"
              id="status"
              value={
                user?.lastActiveTill &&
                moment(moment.now()).isBefore(
                  moment.unix(parseInt(user?.lastActiveTill || '') / 1000)
                )
                  ? 'Active'
                  : 'Inactive'
              }
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="plan">Current Plan</Label>
            <Input
              type="text"
              name="plan"
              id="plan"
              value={user?.plan?.name || 'Free'}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="planExpirationDate">Plan Expiration Date</Label>
            <Input
              type="datetime"
              name="planExpirationDate"
              id="planExpirationDate"
              value={user?.planExpirationDate || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="planTrialDone">Plan Trial Done</Label>
            <Input
              type="text"
              name="planTrialDone"
              id="planTrialDone"
              value={user?.planTrialDone ? 'Yes' : 'No'}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="ipAddress">IP Address</Label>
            <Input
              type="text"
              name="ipAddress"
              id="ipAddress"
              value={user?.lastIPAddress || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="timezone">Timezone</Label>
            <Input
              type="text"
              name="timezone"
              id="timezone"
              value={user?.timezone || ''}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
        <Col lg={6} xl={4}>
          <FormGroup>
            <Label for="totalLogin">Total Login</Label>
            <Input
              type="number"
              name="totalLogin"
              id="totalLogin"
              value={user?.totalLogin || 0}
              readOnly
              className="bg-white form-control-alternative"
            />
          </FormGroup>
        </Col>
      </Row>
    </CardBody>
  </Card>
)

export default UserDetails
