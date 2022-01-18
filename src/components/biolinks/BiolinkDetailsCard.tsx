import Link from 'next/link'
import router from 'next/router'
import React, { useCallback } from 'react'
import { Card, CardHeader, Row, Col, Button, CardBody, Form, FormGroup, Input } from 'reactstrap'
import Swal from 'sweetalert2'
import { Biolink, useDeleteBiolinkMutation } from '../../generated/graphql'

export interface BiolinkDetailsCardProps {
  biolink?: Biolink
}

const BiolinkDetailsCard: React.FC<BiolinkDetailsCardProps> = ({ biolink }) => {
  const [, removeBiolink] = useDeleteBiolinkMutation()

  const showRemoveBiolinkConfirmBoxAndDeleteBiolink = useCallback(async () => {
    const result = await Swal.fire({
      title: 'Are you sure you want to delete this biolink?',
      text: 'This request cannot be undone',
      showDenyButton: true,
      confirmButtonText: `Confirm`,
      denyButtonText: `Not sure`,
      confirmButtonColor: '#d33',
      denyButtonColor: '#3085d6',
    })

    if (result.isConfirmed) {
      const response = await removeBiolink({
        id: biolink?.id || '',
      })

      if (response.error) {
        Swal.fire({
          title: 'Error!',
          text: response.error.message,
          icon: 'error',
        })
      } else {
        await Swal.fire({
          title: 'Success!',
          text: 'Successfully deleted the biolink',
          icon: 'success',
        })

        router.push('/biolinks')
      }
    }
  }, [biolink?.id, removeBiolink])

  return (
    <Card className="bg-secondary shadow">
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Biolink Profile</h3>
          </Col>
          <Col className="text-right" xs="4">
            <Link href={'/biolinks/edit/' + biolink?.id}>
              <Button color="primary" href={'/biolinks/edit/' + biolink?.id} size="sm">
                Edit
              </Button>
            </Link>
            <Button color="danger" size="sm" onClick={showRemoveBiolinkConfirmBoxAndDeleteBiolink}>
              Delete
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Form>
          <h6 className="heading-small text-muted mb-4">User Information</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-name">
                    Full Name
                  </label>
                  <Input
                    className="bg-white form-control-alternative"
                    value={biolink?.displayName || ''}
                    id="input-name"
                    placeholder="Full Name"
                    type="text"
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-username">
                    Username
                  </label>
                  <Input
                    className="bg-white form-control-alternative"
                    value={biolink?.username?.username || ''}
                    id="input-username"
                    placeholder="Username"
                    type="text"
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-category">
                    Category
                  </label>
                  <Input
                    className="bg-white form-control-alternative"
                    value={biolink?.category?.categoryName || ''}
                    id="input-category"
                    placeholder="Category"
                    type="text"
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          {/* Address */}
          <h6 className="heading-small text-muted mb-4">Contact information</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-city">
                    City
                  </label>
                  <Input
                    className="bg-white form-control-alternative"
                    value={biolink?.city || ''}
                    id="input-city"
                    placeholder="City"
                    type="text"
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-state">
                    State
                  </label>
                  <Input
                    className="bg-white form-control-alternative"
                    value={biolink?.state || ''}
                    id="input-state"
                    placeholder="State"
                    type="text"
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-country">
                    Country
                  </label>
                  <Input
                    className="bg-white form-control-alternative"
                    value={biolink?.country || ''}
                    id="input-country"
                    placeholder="Country"
                    type="text"
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          {/* Description */}
          <h6 className="heading-small text-muted mb-4">About Section</h6>
          <div className="pl-lg-4">
            <FormGroup>
              <label className="form-control-label" htmlFor="input-bio">
                Bio
              </label>
              <Input
                className="bg-white form-control-alternative"
                value={biolink?.bio || ''}
                id="input-bio"
                placeholder="Profile Bio"
                rows="4"
                type="textarea"
                readOnly
              />
            </FormGroup>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default BiolinkDetailsCard
