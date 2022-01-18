import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'
import moment from 'moment'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { useGetAllAdminRolesQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'

const columns = [
  {
    name: 'ID',
    selector: 'id',
  },
  {
    name: 'Role Name',
    selector: 'roleName',
  },
  {
    name: 'Role Description',
    selector: 'roleDescription',
  },
  {
    name: 'Created',
    selector: 'createdAt',
  },
  {
    name: 'Last Updated',
    selector: 'updatedAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const AdminRolesIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllAdminRolesQuery({
    variables: {
      options: {
        afterCursor: after,
        beforeCursor: before,
        limit: 10,
        order: 'ASC',
        query: searchText,
      },
    },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllAdminRoles.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllAdminRoles.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllAdminRoles.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllAdminRoles.cursor.afterCursor])

  const adminRoleData =
    data?.getAllAdminRoles.data.map((item) => ({
      id: item.id,
      roleName: item.roleName,
      roleDescription: item.roleDescription,
      createdAt: moment.unix(parseInt(item.createdAt || '') / 1000).format('DD-MM-YYYY'),
      updatedAt: moment.unix(parseInt(item.updatedAt || '') / 1000).format('DD-MM-YYYY'),
      action: (
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <Link href={'/admin-roles/edit/' + item.id}>
              <DropdownItem href={'/admin-roles/edit/' + item.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="User"
        newButton={true}
        newButtonLink={'/admin-roles/add'}
        columns={columns}
        data={adminRoleData}
        hasNextPage={!!data?.getAllAdminRoles.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllAdminRoles.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(AdminRolesIndexPage)
