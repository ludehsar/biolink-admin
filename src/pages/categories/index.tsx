import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { useGetAllCategoriesQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'

const columns = [
  {
    name: 'ID',
    selector: 'id',
  },
  {
    name: 'Category Name',
    selector: 'categoryName',
  },
  {
    name: 'Created At',
    selector: 'createdAt',
  },
  {
    name: 'Updated At',
    selector: 'updatedAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const CategoriesIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllCategoriesQuery({
    variables: {
      options: {
        limit: 10,
        afterCursor: after,
        beforeCursor: before,
        query: searchText,
        order: 'ASC',
      },
    },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllCategories?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllCategories?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllCategories?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllCategories?.cursor.afterCursor])

  const userData =
    data?.getAllCategories?.data.map((category) => ({
      id: category.id,
      categoryName: category.categoryName,
      createdAt: moment.unix(parseInt(category.createdAt || '') / 1000).format('DD-MM-YYYY'),
      updatedAt: moment.unix(parseInt(category.updatedAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/categories/edit/' + category.id}>
              <DropdownItem href={'/categories/edit/' + category.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Categories"
        newButton={true}
        newButtonLink="/categories/add"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllCategories?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllCategories?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(CategoriesIndexPage)
