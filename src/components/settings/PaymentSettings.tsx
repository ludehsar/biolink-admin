import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const PaymentSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        enablePaymentSystem: 'false',
        enabledPaymentType: 'both',
        brandName: '',
        currency: 'usd',
        enableDiscountOrRedeemableCode: 'false',
        enableTaxesAndBilling: 'false',
        enablePaypal: 'false',
        enableStripe: 'false',
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false)
        return
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} method="post">
          <Card className="shadow">
            <CardBody>
              <FormGroup>
                <label htmlFor="enablePaymentSystem">Enable Payment System</label>
                <Input
                  type="select"
                  name="enablePaymentSystem"
                  id="enablePaymentSystem"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enablePaymentSystem}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enabledPaymentType">Enabled Payment Type</label>
                <Input
                  type="select"
                  name="enabledPaymentType"
                  id="enabledPaymentType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enabledPaymentType}
                >
                  <option value="one-time">One Time</option>
                  <option value="recurring">Recurring</option>
                  <option value="both">Both</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="brandName">Brand Name</label>
                <Input
                  type="text"
                  name="brandName"
                  id="brandName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.brandName}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="currency">Currency</label>
                <Input
                  type="select"
                  name="currency"
                  id="currency"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currency}
                >
                  <option value="usd">USD</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableDiscountOrRedeemableCode">
                  Enable Discounts &amp; Redeemable Codes
                </label>
                <Input
                  type="select"
                  name="enableDiscountOrRedeemableCode"
                  id="enableDiscountOrRedeemableCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableDiscountOrRedeemableCode}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableTaxesAndBilling">Enable Taxes and Billing</label>
                <Input
                  type="select"
                  name="enableTaxesAndBilling"
                  id="enableTaxesAndBilling"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableTaxesAndBilling}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enablePaypal">Enable PayPal Integration</label>
                <Input
                  type="select"
                  name="enablePaypal"
                  id="enablePaypal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enablePaypal}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <label htmlFor="enableStripe">Enable Stripe Integration</label>
                <Input
                  type="select"
                  name="enableStripe"
                  id="enableStripe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enableStripe}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Input>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary">
                {isSubmitting ? (
                  <>
                    <i className="fa fa-spinner fa-spin"></i> Saving
                  </>
                ) : (
                  <>Save</>
                )}
              </Button>
            </CardFooter>
          </Card>
        </Form>
      )}
    </Formik>
  )
}

export default PaymentSettings
