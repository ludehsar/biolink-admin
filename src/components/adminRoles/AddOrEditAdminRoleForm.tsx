import React from 'react'
import ErrorPage from 'next/error'
import {
  Container,
  Row,
  Card,
  CardHeader,
  Col,
  Button,
  CardFooter,
  Form,
  Table,
  Input,
} from 'reactstrap'
import InputField from '../InputField/InputField'
import { Formik } from 'formik'
import {
  ErrorResponse,
  RoleSettingsInput,
  useCreateAdminRoleMutation,
  useEditAdminRoleMutation,
  useGetAdminRoleQuery,
} from '../../generated/graphql'
import { ADD_ERRORS_REQUESTED } from '../../redux/actions/errorAction'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Link from 'next/link'
import router from 'next/router'

interface AddOrEditAdminRoleFormProps {
  addErrors: (errors: ErrorResponse[]) => void
  variant: 'Add' | 'Edit'
  id?: number
}

const AddOrEditAdminRoleForm: React.FC<AddOrEditAdminRoleFormProps> = ({
  addErrors,
  id,
  variant,
}) => {
  const [, addAdminRole] = useCreateAdminRoleMutation()
  const [, editAdminRole] = useEditAdminRoleMutation()
  const [{ data }] = useGetAdminRoleQuery({ variables: { id: id as number } })

  return variant === 'Add' || data?.getAdminRole.adminRole ? (
    <Container className="mt--7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col>
                  <h3 className="mb-0 float-left">
                    {variant === 'Add' ? 'Create New Admin Role' : 'Edit Admin Role'}
                  </h3>
                  <div className="float-right">
                    <Link href="/admin-roles">
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
                roleName:
                  variant === 'Add' ? '' : (data?.getAdminRole.adminRole?.roleName as string),
                roleDescription:
                  variant === 'Add'
                    ? ''
                    : (data?.getAdminRole.adminRole?.roleDescription as string),

                // biolink
                biolinkCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'biolink'
                      )?.canCreate,
                biolinkCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'biolink'
                      )?.canDelete,
                biolinkCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'biolink'
                      )?.canEdit,
                biolinkCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'biolink'
                      )?.canShow,
                biolinkCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'biolink'
                      )?.canShowList,

                // black list
                blackListCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'black_list'
                      )?.canCreate,
                blackListCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'black_list'
                      )?.canDelete,
                blackListCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'black_list'
                      )?.canEdit,
                blackListCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'black_list'
                      )?.canShow,
                blackListCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'black_list'
                      )?.canShowList,

                // category
                categoryCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'category'
                      )?.canCreate,
                categoryCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'category'
                      )?.canDelete,
                categoryCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'category'
                      )?.canEdit,
                categoryCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'category'
                      )?.canShow,
                categoryCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'category'
                      )?.canShowList,

                // code
                codeCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'code'
                      )?.canCreate,
                codeCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'code'
                      )?.canDelete,
                codeCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'code'
                      )?.canEdit,
                codeCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'code'
                      )?.canShow,
                codeCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'code'
                      )?.canShowList,

                // domain
                domainCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'domain'
                      )?.canCreate,
                domainCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'domain'
                      )?.canDelete,
                domainCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'domain'
                      )?.canEdit,
                domainCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'domain'
                      )?.canShow,
                domainCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'domain'
                      )?.canShowList,

                // link
                linkCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'link'
                      )?.canCreate,
                linkCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'link'
                      )?.canDelete,
                linkCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'link'
                      )?.canEdit,
                linkCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'link'
                      )?.canShow,
                linkCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'link'
                      )?.canShowList,

                // plan
                planCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'plan'
                      )?.canCreate,
                planCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'plan'
                      )?.canDelete,
                planCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'plan'
                      )?.canEdit,
                planCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'plan'
                      )?.canShow,
                planCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'plan'
                      )?.canShowList,

                // username
                premiumUsernameCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'username'
                      )?.canCreate,
                premiumUsernameCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'username'
                      )?.canDelete,
                premiumUsernameCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'username'
                      )?.canEdit,
                premiumUsernameCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'username'
                      )?.canShow,
                premiumUsernameCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'username'
                      )?.canShowList,

                // tax
                taxCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'tax'
                      )?.canCreate,
                taxCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'tax'
                      )?.canDelete,
                taxCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'tax'
                      )?.canEdit,
                taxCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'tax'
                      )?.canShow,
                taxCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'tax'
                      )?.canShowList,

                // user
                userCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user'
                      )?.canCreate,
                userCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user'
                      )?.canDelete,
                userCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user'
                      )?.canEdit,
                userCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user'
                      )?.canShow,
                userCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user'
                      )?.canShowList,

                // user log
                userLogCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user_log'
                      )?.canCreate,
                userLogCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user_log'
                      )?.canDelete,
                userLogCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user_log'
                      )?.canEdit,
                userLogCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user_log'
                      )?.canShow,
                userLogCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'user_log'
                      )?.canShowList,

                // verification
                verificationCanCreate:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'verification'
                      )?.canCreate,
                verificationCanDelete:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'verification'
                      )?.canDelete,
                verificationCanEdit:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'verification'
                      )?.canEdit,
                verificationCanShow:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'verification'
                      )?.canShow,
                verificationCanShowList:
                  variant === 'Add'
                    ? false
                    : data?.getAdminRole.adminRole?.roleSettings?.find(
                        (settings) => settings.resource === 'verification'
                      )?.canShowList,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                const roleSettings: RoleSettingsInput[] = [
                  {
                    resource: 'biolink',
                    canCreate: values.biolinkCanCreate,
                    canDelete: values.biolinkCanDelete,
                    canEdit: values.biolinkCanEdit,
                    canShow: values.biolinkCanShow,
                    canShowList: values.biolinkCanShowList,
                  },
                  {
                    resource: 'black_list',
                    canCreate: values.blackListCanCreate,
                    canDelete: values.blackListCanDelete,
                    canEdit: values.blackListCanEdit,
                    canShow: values.blackListCanShow,
                    canShowList: values.blackListCanShowList,
                  },
                  {
                    resource: 'category',
                    canCreate: values.categoryCanCreate,
                    canDelete: values.categoryCanDelete,
                    canEdit: values.categoryCanEdit,
                    canShow: values.categoryCanShow,
                    canShowList: values.categoryCanShowList,
                  },
                  {
                    resource: 'code',
                    canCreate: values.codeCanCreate,
                    canDelete: values.codeCanDelete,
                    canEdit: values.codeCanEdit,
                    canShow: values.codeCanShow,
                    canShowList: values.codeCanShowList,
                  },
                  {
                    resource: 'domain',
                    canCreate: values.domainCanCreate,
                    canDelete: values.domainCanDelete,
                    canEdit: values.domainCanEdit,
                    canShow: values.domainCanShow,
                    canShowList: values.domainCanShowList,
                  },
                  {
                    resource: 'link',
                    canCreate: values.linkCanCreate,
                    canDelete: values.linkCanDelete,
                    canEdit: values.linkCanEdit,
                    canShow: values.linkCanShow,
                    canShowList: values.linkCanShowList,
                  },
                  {
                    resource: 'plan',
                    canCreate: values.planCanCreate,
                    canDelete: values.planCanDelete,
                    canEdit: values.planCanEdit,
                    canShow: values.planCanShow,
                    canShowList: values.planCanShowList,
                  },
                  {
                    resource: 'username',
                    canCreate: values.premiumUsernameCanCreate,
                    canDelete: values.premiumUsernameCanDelete,
                    canEdit: values.premiumUsernameCanEdit,
                    canShow: values.premiumUsernameCanShow,
                    canShowList: values.premiumUsernameCanShowList,
                  },
                  {
                    resource: 'tax',
                    canCreate: values.taxCanCreate,
                    canDelete: values.taxCanDelete,
                    canEdit: values.taxCanEdit,
                    canShow: values.taxCanShow,
                    canShowList: values.taxCanShowList,
                  },
                  {
                    resource: 'user',
                    canCreate: values.userCanCreate,
                    canDelete: values.userCanDelete,
                    canEdit: values.userCanEdit,
                    canShow: values.userCanShow,
                    canShowList: values.userCanShowList,
                  },
                  {
                    resource: 'user_log',
                    canCreate: values.userLogCanCreate,
                    canDelete: values.userLogCanDelete,
                    canEdit: values.userLogCanEdit,
                    canShow: values.userLogCanShow,
                    canShowList: values.userLogCanShowList,
                  },
                  {
                    resource: 'verification',
                    canCreate: values.verificationCanCreate,
                    canDelete: values.verificationCanDelete,
                    canEdit: values.verificationCanEdit,
                    canShow: values.verificationCanShow,
                    canShowList: values.verificationCanShowList,
                  },
                ]

                if (variant === 'Add') {
                  const response = await addAdminRole({
                    options: {
                      roleName: values.roleName,
                      roleDescription: values.roleDescription,
                      roleSettings,
                    },
                  })

                  if (response.data?.createAdminRole?.errors) {
                    addErrors(response.data.createAdminRole.errors)
                  } else {
                    router.push('/admin-roles')
                  }
                } else {
                  const response = await editAdminRole({
                    id: id as number,
                    options: {
                      roleName: values.roleName,
                      roleDescription: values.roleDescription,
                      roleSettings,
                    },
                  })

                  if (response.data?.editAdminRole?.errors) {
                    addErrors(response.data.editAdminRole.errors)
                  } else {
                    router.push('/admin-roles')
                  }
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
                <Form role="form" method="post" onSubmit={handleSubmit}>
                  <div className="p-4">
                    <Row>
                      <Col md={12}>
                        <InputField
                          name="roleName"
                          type="text"
                          label="Admin Role Name"
                          className="mb-3"
                          placeholder="Enter role name"
                        />
                      </Col>

                      <Col md={12}>
                        <InputField
                          name="roleDescription"
                          type="textarea"
                          label="Admin Role Description"
                          className="mb-3"
                          placeholder="Enter role description"
                        />
                      </Col>
                    </Row>
                    <h4>Role Settings</h4>
                    <Table borderless>
                      <thead>
                        <th>Resource</th>
                        <th>Can Show</th>
                        <th>Can Show List</th>
                        <th>Can Create</th>
                        <th>Can Edit</th>
                        <th>Can Delete</th>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Biolink</th>
                          <td className="text-center">
                            <Input
                              name="biolinkCanShow"
                              type="checkbox"
                              defaultChecked={values.biolinkCanShow as boolean}
                              onChange={(e) => setFieldValue('biolinkCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="biolinkCanShowList"
                              type="checkbox"
                              defaultChecked={values.biolinkCanShowList as boolean}
                              onChange={(e) =>
                                setFieldValue('biolinkCanShowList', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="biolinkCanCreate"
                              type="checkbox"
                              defaultChecked={values.biolinkCanCreate as boolean}
                              onChange={(e) => setFieldValue('biolinkCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="biolinkCanEdit"
                              type="checkbox"
                              defaultChecked={values.biolinkCanEdit as boolean}
                              onChange={(e) => setFieldValue('biolinkCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="biolinkCanDelete"
                              type="checkbox"
                              defaultChecked={values.biolinkCanDelete as boolean}
                              onChange={(e) => setFieldValue('biolinkCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Black List</th>
                          <td className="text-center">
                            <Input
                              name="blackListCanShow"
                              type="checkbox"
                              defaultChecked={values.blackListCanShow as boolean}
                              onChange={(e) => setFieldValue('blackListCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="blackListCanShowList"
                              type="checkbox"
                              defaultChecked={values.blackListCanShowList as boolean}
                              onChange={(e) =>
                                setFieldValue('blackListCanShowList', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="blackListCanCreate"
                              type="checkbox"
                              defaultChecked={values.blackListCanCreate as boolean}
                              onChange={(e) =>
                                setFieldValue('blackListCanCreate', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="blackListCanEdit"
                              type="checkbox"
                              defaultChecked={values.blackListCanEdit as boolean}
                              onChange={(e) => setFieldValue('blackListCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="blackListCanDelete"
                              type="checkbox"
                              defaultChecked={values.blackListCanDelete as boolean}
                              onChange={(e) =>
                                setFieldValue('blackListCanDelete', e.target.checked)
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Category</th>
                          <td className="text-center">
                            <Input
                              name="categoryCanShow"
                              type="checkbox"
                              defaultChecked={values.categoryCanShow as boolean}
                              onChange={(e) => setFieldValue('categoryCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="categoryCanShowList"
                              type="checkbox"
                              defaultChecked={values.categoryCanShowList as boolean}
                              onChange={(e) =>
                                setFieldValue('categoryCanShowList', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="categoryCanCreate"
                              type="checkbox"
                              defaultChecked={values.categoryCanCreate as boolean}
                              onChange={(e) => setFieldValue('categoryCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="categoryCanEdit"
                              type="checkbox"
                              defaultChecked={values.categoryCanEdit as boolean}
                              onChange={(e) => setFieldValue('categoryCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="categoryCanDelete"
                              type="checkbox"
                              defaultChecked={values.categoryCanDelete as boolean}
                              onChange={(e) => setFieldValue('categoryCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Code</th>
                          <td className="text-center">
                            <Input
                              name="codeCanShow"
                              type="checkbox"
                              defaultChecked={values.codeCanShow as boolean}
                              onChange={(e) => setFieldValue('codeCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="codeCanShowList"
                              type="checkbox"
                              defaultChecked={values.codeCanShowList as boolean}
                              onChange={(e) => setFieldValue('codeCanShowList', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="codeCanCreate"
                              type="checkbox"
                              defaultChecked={values.codeCanCreate as boolean}
                              onChange={(e) => setFieldValue('codeCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="codeCanEdit"
                              type="checkbox"
                              defaultChecked={values.codeCanEdit as boolean}
                              onChange={(e) => setFieldValue('codeCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="codeCanDelete"
                              type="checkbox"
                              defaultChecked={values.codeCanDelete as boolean}
                              onChange={(e) => setFieldValue('codeCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Domain</th>
                          <td className="text-center">
                            <Input
                              name="domainCanShow"
                              type="checkbox"
                              defaultChecked={values.domainCanShow as boolean}
                              onChange={(e) => setFieldValue('domainCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="domainCanShowList"
                              type="checkbox"
                              defaultChecked={values.domainCanShowList as boolean}
                              onChange={(e) => setFieldValue('domainCanShowList', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="domainCanCreate"
                              type="checkbox"
                              defaultChecked={values.domainCanCreate as boolean}
                              onChange={(e) => setFieldValue('domainCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="domainCanEdit"
                              type="checkbox"
                              defaultChecked={values.domainCanEdit as boolean}
                              onChange={(e) => setFieldValue('domainCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="domainCanDelete"
                              type="checkbox"
                              defaultChecked={values.domainCanDelete as boolean}
                              onChange={(e) => setFieldValue('domainCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Link</th>
                          <td className="text-center">
                            <Input
                              name="linkCanShow"
                              type="checkbox"
                              defaultChecked={values.linkCanShow as boolean}
                              onChange={(e) => setFieldValue('linkCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="linkCanShowList"
                              type="checkbox"
                              defaultChecked={values.linkCanShowList as boolean}
                              onChange={(e) => setFieldValue('linkCanShowList', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="linkCanCreate"
                              type="checkbox"
                              defaultChecked={values.linkCanCreate as boolean}
                              onChange={(e) => setFieldValue('linkCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="linkCanEdit"
                              type="checkbox"
                              defaultChecked={values.linkCanEdit as boolean}
                              onChange={(e) => setFieldValue('linkCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="linkCanDelete"
                              type="checkbox"
                              defaultChecked={values.linkCanDelete as boolean}
                              onChange={(e) => setFieldValue('linkCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Plan</th>
                          <td className="text-center">
                            <Input
                              name="planCanShow"
                              type="checkbox"
                              defaultChecked={values.planCanShow as boolean}
                              onChange={(e) => setFieldValue('planCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="planCanShowList"
                              type="checkbox"
                              defaultChecked={values.planCanShowList as boolean}
                              onChange={(e) => setFieldValue('planCanShowList', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="planCanCreate"
                              type="checkbox"
                              defaultChecked={values.planCanCreate as boolean}
                              onChange={(e) => setFieldValue('planCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="planCanEdit"
                              type="checkbox"
                              defaultChecked={values.planCanEdit as boolean}
                              onChange={(e) => setFieldValue('planCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="planCanDelete"
                              type="checkbox"
                              defaultChecked={values.planCanDelete as boolean}
                              onChange={(e) => setFieldValue('planCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Username</th>
                          <td className="text-center">
                            <Input
                              name="premiumUsernameCanShow"
                              type="checkbox"
                              defaultChecked={values.premiumUsernameCanShow as boolean}
                              onChange={(e) =>
                                setFieldValue('premiumUsernameCanShow', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="premiumUsernameCanShowList"
                              type="checkbox"
                              defaultChecked={values.premiumUsernameCanShowList as boolean}
                              onChange={(e) =>
                                setFieldValue('premiumUsernameCanShowList', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="premiumUsernameCanCreate"
                              type="checkbox"
                              defaultChecked={values.premiumUsernameCanCreate as boolean}
                              onChange={(e) =>
                                setFieldValue('premiumUsernameCanCreate', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="premiumUsernameCanEdit"
                              type="checkbox"
                              defaultChecked={values.premiumUsernameCanEdit as boolean}
                              onChange={(e) =>
                                setFieldValue('premiumUsernameCanEdit', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="premiumUsernameCanDelete"
                              type="checkbox"
                              defaultChecked={values.premiumUsernameCanDelete as boolean}
                              onChange={(e) =>
                                setFieldValue('premiumUsernameCanDelete', e.target.checked)
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Tax</th>
                          <td className="text-center">
                            <Input
                              name="taxCanShow"
                              type="checkbox"
                              defaultChecked={values.taxCanShow as boolean}
                              onChange={(e) => setFieldValue('taxCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="taxCanShowList"
                              type="checkbox"
                              defaultChecked={values.taxCanShowList as boolean}
                              onChange={(e) => setFieldValue('taxCanShowList', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="taxCanCreate"
                              type="checkbox"
                              defaultChecked={values.taxCanCreate as boolean}
                              onChange={(e) => setFieldValue('taxCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="taxCanEdit"
                              type="checkbox"
                              defaultChecked={values.taxCanEdit as boolean}
                              onChange={(e) => setFieldValue('taxCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="taxCanDelete"
                              type="checkbox"
                              defaultChecked={values.taxCanDelete as boolean}
                              onChange={(e) => setFieldValue('taxCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">User</th>
                          <td className="text-center">
                            <Input
                              name="userCanShow"
                              type="checkbox"
                              defaultChecked={values.userCanShow as boolean}
                              onChange={(e) => setFieldValue('userCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userCanShowList"
                              type="checkbox"
                              defaultChecked={values.userCanShowList as boolean}
                              onChange={(e) => setFieldValue('userCanShowList', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userCanCreate"
                              type="checkbox"
                              defaultChecked={values.userCanCreate as boolean}
                              onChange={(e) => setFieldValue('userCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userCanEdit"
                              type="checkbox"
                              defaultChecked={values.userCanEdit as boolean}
                              onChange={(e) => setFieldValue('userCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userCanDelete"
                              type="checkbox"
                              defaultChecked={values.userCanDelete as boolean}
                              onChange={(e) => setFieldValue('userCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">User Log</th>
                          <td className="text-center">
                            <Input
                              name="userLogCanShow"
                              type="checkbox"
                              defaultChecked={values.userLogCanShow as boolean}
                              onChange={(e) => setFieldValue('userLogCanShow', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userLogCanShowList"
                              type="checkbox"
                              defaultChecked={values.userLogCanShowList as boolean}
                              onChange={(e) =>
                                setFieldValue('userLogCanShowList', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userLogCanCreate"
                              type="checkbox"
                              defaultChecked={values.userLogCanCreate as boolean}
                              onChange={(e) => setFieldValue('userLogCanCreate', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userLogCanEdit"
                              type="checkbox"
                              defaultChecked={values.userLogCanEdit as boolean}
                              onChange={(e) => setFieldValue('userLogCanEdit', e.target.checked)}
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="userLogCanDelete"
                              type="checkbox"
                              defaultChecked={values.userLogCanDelete as boolean}
                              onChange={(e) => setFieldValue('userLogCanDelete', e.target.checked)}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Verification</th>
                          <td className="text-center">
                            <Input
                              name="verificationCanShow"
                              type="checkbox"
                              defaultChecked={values.verificationCanShow as boolean}
                              onChange={(e) =>
                                setFieldValue('verificationCanShow', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="verificationCanShowList"
                              type="checkbox"
                              defaultChecked={values.verificationCanShowList as boolean}
                              onChange={(e) =>
                                setFieldValue('verificationCanShowList', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="verificationCanCreate"
                              type="checkbox"
                              defaultChecked={values.verificationCanCreate as boolean}
                              onChange={(e) =>
                                setFieldValue('verificationCanCreate', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="verificationCanEdit"
                              type="checkbox"
                              defaultChecked={values.verificationCanEdit as boolean}
                              onChange={(e) =>
                                setFieldValue('verificationCanEdit', e.target.checked)
                              }
                            />
                          </td>
                          <td className="text-center">
                            <Input
                              name="verificationCanDelete"
                              type="checkbox"
                              defaultChecked={values.verificationCanDelete as boolean}
                              onChange={(e) =>
                                setFieldValue('verificationCanDelete', e.target.checked)
                              }
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
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

export default connect(null, mapDispatchToProps)(AddOrEditAdminRoleForm)
