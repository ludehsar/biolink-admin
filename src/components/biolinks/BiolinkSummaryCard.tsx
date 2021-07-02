import React from 'react'
import { Card, Row, Col, CardBody } from 'reactstrap'
import { Biolink } from '../../generated/graphql'

export interface BiolinkSummaryCardProps {
  biolink?: Biolink
}

const BiolinkSummaryCard: React.FC<BiolinkSummaryCardProps> = ({ biolink }) => (
  <Card className="card-profile shadow">
    <Row className="justify-content-center">
      <Col className="order-lg-2" lg="3">
        <div className="card-profile-image">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img alt="..." className="rounded-circle" src={biolink?.profilePhotoUrl || ''} />
          </a>
        </div>
      </Col>
    </Row>
    <CardBody className="pt-0 pt-md-4">
      <div className="text-center mt-7">
        <h3>{biolink?.displayName || ''}</h3>
        <div className="h5 font-weight-300">
          <i className="ni location_pin mr-2" />
          {biolink?.city || ''}
          {biolink?.state ? ', ' + biolink.state : ''}
          {biolink?.country ? ', ' + biolink?.country : ''}
        </div>
        <div className="h5 mt-4">
          <i className="ni business_briefcase-24 mr-2" />
          {biolink?.category?.categoryName || ''}
        </div>
        <hr className="my-4" />
        <p>{biolink?.bio || ''}</p>
      </div>
    </CardBody>
  </Card>
)

export default BiolinkSummaryCard
