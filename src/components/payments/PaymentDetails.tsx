import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { Card, CardHeader, Row, Col, CardBody, FormGroup, Input } from 'reactstrap'
import { Payment } from '../../generated/graphql'

export interface PaymentDetailsProps {
  payment: Payment
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ payment }) => (
  <Card className="bg-secondary shadow">
    <CardHeader className="bg-white border-0">
      <Row className="align-items-center">
        <Col xs="8">
          <h3 className="mb-0">Payment Details</h3>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <h6 className="heading-small text-muted mb-4">User Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="12">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-email">
                User
              </label>
              <div>
                <Link href={'/users/view/' + payment.user?.id}>
                  <a>{payment.user?.email}</a>
                </Link>
              </div>
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Payment Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-payment-id">
                Payment ID
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.id || ''}
                id="input-payment-id"
                placeholder="Payment ID"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-amount-paid">
                Amount Paid
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.amountPaid || 0}
                id="input-amount-paid"
                placeholder="Amount Paid"
                type="number"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-payment-currency">
                Currency
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.paymentCurrency?.toUpperCase() || 'usd'}
                id="input-payment-currency"
                placeholder="Payment Currency"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-payment-provider">
                Provider
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.paymentProvider?.toUpperCase() || 'Stripe'}
                id="input-payment-provider"
                placeholder="Payment Provider"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-payment-type">
                Payment Type
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.paymentType?.toUpperCase() || 'Stripe'}
                id="input-payment-type"
                placeholder="Payment Type"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <label className="form-control-label" htmlFor="input-created-at">
                Created At
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={moment
                  .unix(parseInt(payment.createdAt || '') / 1000)
                  .format('DD-MM-YYYY HH:mm:ss')}
                id="input-created-at"
                placeholder="Created At"
                type="datetime"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Purchase Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col>
            {payment.plan ? (
              <FormGroup>
                <label className="form-control-label" htmlFor="input-plan">
                  Plan
                </label>
                <div>
                  <Link href={'/plans/view/' + payment.plan.id}>
                    <a>{payment.plan.name}</a>
                  </Link>
                </div>
              </FormGroup>
            ) : (
              payment.order && (
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-order">
                    Order
                  </label>
                  <div>
                    <Link href={'/orders/view/' + payment.order.id}>
                      <a>{payment.order.id}</a>
                    </Link>
                  </div>
                </FormGroup>
              )
            )}
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Payment Details (RAW)</h6>
      <div className="pl-lg-4">
        <Row>
          <Col>
            <pre>{JSON.stringify(payment.paymentDetails, null, 2)}</pre>
          </Col>
        </Row>
      </div>
    </CardBody>
  </Card>
)

export default PaymentDetails
