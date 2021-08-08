import React, { useCallback } from 'react'
import ErrorPage from 'next/error'
import { Container, Row, Card, CardHeader, Col, Button, CardFooter, Form } from 'reactstrap'
import InputField from '../InputField/InputField'
import { Formik } from 'formik'
import {
  ErrorResponse,
  useEditCategoryMutation,
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Link from 'next/link'
import router from 'next/router'
import Swal from 'sweetalert2'

interface AddOrEditUsersFormProps {
  addErrors: (errors: ErrorResponse[]) => void
  variant: 'Add' | 'Edit'
  id?: number
}

const AddOrEditCategoryForm: React.FC<AddOrEditUsersFormProps> = ({ addErrors, id, variant }) => {
  const [, createCategory] = useCreateCategoryMutation()
  const [, editCategory] = useEditCategoryMutation()
  const [, deleteCategory] = useDeleteCategoryMutation()
  const [{ data }] = useGetCategoryQuery({ variables: { id: id as number } })

  const showDeleteCategoryConfirmBoxAndDeleteCategory = useCallback(async () => {
    const result = await Swal.fire({
      title: 'Are you sure you want to delete this category?',
      text: 'This request cannot be undone',
      showDenyButton: true,
      confirmButtonText: `Confirm`,
      denyButtonText: `Not sure`,
      confirmButtonColor: '#d33',
      denyButtonColor: '#3085d6',
    })

    if (result.isConfirmed) {
      const response = await deleteCategory({
        id: id as number,
      })

      if (response.data?.deleteCategory?.errors && response.data.deleteCategory.errors.length > 0) {
        Swal.fire({
          title: 'Error!',
          text: response.data.deleteCategory.errors[0].message,
          icon: 'error',
        })
      } else if (response.error) {
        Swal.fire({
          title: 'Error!',
          text: response.error.message,
          icon: 'error',
        })
      } else {
        await Swal.fire({
          title: 'Success!',
          text: 'Successfully deleted the user',
          icon: 'success',
        })

        router.push('/categories')
      }
    }
  }, [deleteCategory, id])

  return variant === 'Add' || data?.getCategory?.category ? (
    <Container className="mt--7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col>
                  <h3 className="mb-0 float-left">
                    {variant === 'Add' ? 'Create New Category' : 'Edit Category'}
                  </h3>
                  <div className="float-right">
                    <Button
                      color="danger"
                      size="sm"
                      onClick={showDeleteCategoryConfirmBoxAndDeleteCategory}
                    >
                      Delete
                    </Button>
                    <Link href="/categories">
                      <Button color="primary" size="sm">
                        Back
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <Formik
              enableReinitialize={true}
              initialValues={{
                categoryName: variant === 'Add' ? '' : data?.getCategory?.category?.categoryName,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                if (variant === 'Add') {
                  const response = await createCategory({
                    options: {
                      categoryName: values.categoryName,
                    },
                  })

                  if (response.data?.createCategory?.errors) {
                    addErrors(response.data.createCategory.errors)
                  } else {
                    router.push('/categories')
                  }
                } else {
                  const response = await editCategory({
                    id: id as number,
                    options: {
                      categoryName: values.categoryName,
                    },
                  })

                  if (response.data?.editCategory?.errors) {
                    addErrors(response.data.editCategory.errors)
                  } else {
                    router.push('/categories')
                  }
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting, handleSubmit }) => (
                <Form role="form" method="post" onSubmit={handleSubmit}>
                  <div className="p-4">
                    <Row>
                      <Col>
                        <InputField
                          name="categoryName"
                          type="text"
                          label="Category Name"
                          className="mb-3"
                          placeholder="Enter category name"
                        />
                      </Col>
                    </Row>
                  </div>
                  <CardFooter className="py-4">
                    <Button className="my-4" type="submit" color="primary">
                      {isSubmitting ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Saving
                        </>
                      ) : (
                        <>Save</>
                      )}
                    </Button>
                  </CardFooter>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </Row>
    </Container>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  addErrors: (errors: ErrorResponse[]) => void
} => ({
  addErrors: (errors: ErrorResponse[]) => dispatch({ type: ADD_ERRORS_REQUESTED, payload: errors }),
})

export default connect(null, mapDispatchToProps)(AddOrEditCategoryForm)
