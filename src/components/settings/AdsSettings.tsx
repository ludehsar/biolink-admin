import { Formik } from 'formik'
import React from 'react'
import { Card, CardBody, CardFooter, Button, Input, FormGroup, Form } from 'reactstrap'

const AdsSettings: React.FC = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        header: '',
        footer: '',
        biolinkPageHeader: '',
        biolinkPageFooter: '',
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
                <label htmlFor="header">Header</label>
                <Input
                  type="text"
                  name="header"
                  id="header"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.header}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="footer">Footer</label>
                <Input
                  type="text"
                  name="footer"
                  id="footer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.footer}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="biolinkPageHeader">Biolink Page Header</label>
                <Input
                  type="text"
                  name="biolinkPageHeader"
                  id="biolinkPageHeader"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.biolinkPageHeader}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="biolinkPageFooter">Biolink Page Footer</label>
                <Input
                  type="text"
                  name="biolinkPageFooter"
                  id="biolinkPageFooter"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.biolinkPageFooter}
                />
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

export default AdsSettings
