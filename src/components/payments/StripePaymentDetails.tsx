import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { Card, CardHeader, Row, Col, CardBody, FormGroup, Input, Button } from 'reactstrap'
import { Payment } from '../../generated/graphql'

export interface StripePaymentDetailsProps {
  payment: Payment
}

const StripePaymentDetails: React.FC<StripePaymentDetailsProps> = ({ payment }) => (
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
              <label className="form-control-label" htmlFor="input-invoice-number">
                Invoice Number
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeInvoiceNumber || ''}
                id="input-invoice-number"
                placeholder="Invoice Number"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-payment-type">
                Payment Type
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.paymentType || ''}
                id="input-payment-type"
                placeholder="Payment Type"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-amount-due">
                Amount Due
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={(payment.stripeAmountDue || 0) / 100}
                id="input-amount-due"
                placeholder="Amount Due"
                type="number"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-amount-paid">
                Amount Paid
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={(payment.stripeAmountPaid || 0) / 100}
                id="input-amount-paid"
                placeholder="Amount Paid"
                type="number"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-amount-remaining">
                Amount Remaining
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={(payment.stripeAmountRemaining || 0) / 100}
                id="input-amount-remaining"
                placeholder="Amount Remaining"
                type="number"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-charge-id">
                Charge ID
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeChargeId || ''}
                id="input-charge-id"
                placeholder="Charge ID"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-invoice-created">
                Invoice Created
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={moment
                  .unix(parseInt(payment.stripeInvoiceCreated || '0'))
                  .format('DD-MM-YYYY HH:mm:ss')}
                id="input-amount-paid"
                placeholder="Invoice Created"
                type="datetime"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-currency">
                Currency
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripePaymentCurrency || ''}
                id="input-currency"
                placeholder="Currency"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-price-id">
                Price ID
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripePriceId || ''}
                id="input-price-id"
                placeholder="Price ID"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-discount">
                Discount
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeDiscount || ''}
                id="input-discount"
                placeholder="Discount"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-status">
                Status
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeStatus || ''}
                id="input-status"
                placeholder="Status"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-invoice-url">
                Invoice URL
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeInvoiceUrl || ''}
                id="input-invoice-url"
                placeholder="Invoice URL"
                type="url"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-pdf">
                Download PDF
              </label>
              <div>
                <Link href={payment.stripeInvoicePdfUrl || ''}>
                  <Button color="primary" size="sm">
                    Download
                  </Button>
                </Link>
              </div>
            </FormGroup>
          </Col>
          <Col lg="4">
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
      <h6 className="heading-small text-muted mb-4">Customer Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-customer-id">
                Customer ID
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeCustomerId || ''}
                id="input-customer-id"
                placeholder="Customer ID"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-name">
                Customer Name
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeCustomerName || ''}
                id="input-customer-name"
                placeholder="Customer Name"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-customer-email">
                Customer Email
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeCustomerEmail || ''}
                id="input-customer-email"
                placeholder="Customer Email"
                type="email"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-phone">
                Customer Phone
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeCustomerPhone || ''}
                id="input-customer-phone"
                placeholder="Customer Phone"
                type="tel"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-customer-address">
                Customer Address
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeCustomerAddress || ''}
                id="input-customer-address"
                placeholder="Customer Address"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-customer-shipping">
                Customer Shipping
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeCustomerShipping || ''}
                id="input-customer-shipping"
                placeholder="Customer Shipping"
                type="tel"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Customer Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-subscription-id">
                Subscription ID
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripeSubscriptionId || ''}
                id="input-subscription-id"
                placeholder="Subscription ID"
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-period-start">
                Period Start
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripePeriodStart || ''}
                id="input-period-start"
                placeholder="Period Start"
                type="datetime"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-period-end">
                Period End
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={payment.stripePeriodEnd || ''}
                id="input-period-end"
                placeholder="Period End"
                type="datetime"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    </CardBody>
  </Card>
)

export default StripePaymentDetails
