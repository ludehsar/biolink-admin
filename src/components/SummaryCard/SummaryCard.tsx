import React from 'react'
import { Card, CardBody, Row, CardTitle, Col } from 'reactstrap'

export interface SummaryCardProps {
  title: string
  count: number
  iconBackgroundClassName?:
    | 'bg-danger'
    | 'bg-primary'
    | 'bg-info'
    | 'bg-success'
    | 'bg-warning'
    | 'bg-dark'
    | 'bg-default'
  icon?: string
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  count,
  iconBackgroundClassName,
  icon,
}) => (
  <Card className="card-stats mb-4 mb-xl-0">
    <CardBody>
      <Row>
        <div className="col">
          <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
            {title}
          </CardTitle>
          <span className="h2 font-weight-bold mb-0">{count}</span>
        </div>
        <Col className="col-auto">
          <div
            className={`icon icon-shape ${
              iconBackgroundClassName || 'bg-danger'
            } text-white rounded-circle shadow`}
          >
            <i className={icon || 'fas fa-chart-bar'} />
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
)

export default SummaryCard
