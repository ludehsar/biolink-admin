import Swal from 'sweetalert2'
import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'
import {
  PaymentSystemSettings,
  useEditPaymentSettingsMutation,
  useGetSettingsByKeyQuery,
} from '../../generated/graphql'

const PaymentSettings: React.FC = () => {
  const [{ data }] = useGetSettingsByKeyQuery({
    variables: { key: 'payments' },
  })
  const [, editPaymentSettings] = useEditPaymentSettingsMutation()
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        enablePaymentSystem:
          (data?.getSettingsByKey as PaymentSystemSettings)?.enablePaymentSystem === true
            ? 'true'
            : 'false',
        enabledAcceptingPaymentType:
          (data?.getSettingsByKey as PaymentSystemSettings)?.enabledAcceptingPaymentType || 'Both',
        brandName: (data?.getSettingsByKey as PaymentSystemSettings)?.brandName || '',
        currency: (data?.getSettingsByKey as PaymentSystemSettings)?.currency || 'usd',
        enableDiscountOrRedeemableCode:
          (data?.getSettingsByKey as PaymentSystemSettings)?.enableDiscountOrRedeemableCode === true
            ? 'true'
            : 'false',
        enableTaxesAndBilling:
          (data?.getSettingsByKey as PaymentSystemSettings)?.enableTaxesAndBilling === true
            ? 'true'
            : 'false',
        enablePaypal:
          (data?.getSettingsByKey as PaymentSystemSettings)?.enablePaypal === true
            ? 'true'
            : 'false',
        enableStripe:
          (data?.getSettingsByKey as PaymentSystemSettings)?.enableStripe === true
            ? 'true'
            : 'false',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await editPaymentSettings({
          options: {
            enablePaymentSystem: values.enablePaymentSystem === 'true',
            enabledAcceptingPaymentType: values.enabledAcceptingPaymentType || 'Both',
            brandName: values.brandName || '',
            currency: values.currency || 'usd',
            enableDiscountOrRedeemableCode: values.enableDiscountOrRedeemableCode === 'true',
            enableTaxesAndBilling: values.enableTaxesAndBilling === 'true',
            enablePaypal: values.enablePaypal === 'true',
            enableStripe: values.enableStripe === 'true',
          },
        })

        if (response.error) {
          Swal.fire({
            title: 'Error!',
            text: response.error.message,
            icon: 'error',
          })
        }

        if (response.data) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully edited email settings',
            icon: 'success',
          })
          // resetForm({
          //   values: {
          //     enablePaymentSystem:
          //       response.data.editPaymentSettings.settings.enablePaymentSystem === true
          //         ? 'true'
          //         : 'false',
          //     enabledAcceptingPaymentType:
          //       response.data.editPaymentSettings.settings.enabledAcceptingPaymentType || 'Both',
          //     brandName: response.data.editPaymentSettings.settings.brandName || '',
          //     currency: response.data.editPaymentSettings.settings.currency || 'usd',
          //     enableDiscountOrRedeemableCode:
          //       response.data.editPaymentSettings.settings.enableDiscountOrRedeemableCode === true
          //         ? 'true'
          //         : 'false',
          //     enableTaxesAndBilling:
          //       response.data.editPaymentSettings.settings.enableTaxesAndBilling === true
          //         ? 'true'
          //         : 'false',
          //     enablePaypal:
          //       response.data.editPaymentSettings.settings.enablePaypal === true ? 'true' : 'false',
          //     enableStripe:
          //       response.data.editPaymentSettings.settings.enableStripe === true ? 'true' : 'false',
          //   },
          // })
        }
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
                <label htmlFor="enabledAcceptingPaymentType">Enabled Payment Type</label>
                <Input
                  type="select"
                  name="enabledAcceptingPaymentType"
                  id="enabledAcceptingPaymentType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.enabledAcceptingPaymentType}
                >
                  <option value="OneTime">One Time</option>
                  <option value="Recurring">Recurring</option>
                  <option value="Both">Both</option>
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
