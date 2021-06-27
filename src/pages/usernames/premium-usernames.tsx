import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'
import moment from 'moment'

import DataTable from '../../components/DataTable/DataTable'
import AdminHeader from '../../components/Header/AdminHeader'
import { useGetAllPremiumUsernamesQuery } from '../../generated/graphql'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const columns = [
  {
    name: 'Username',
    selector: 'username',
  },
  {
    name: 'Expire Date',
    selector: 'expireDate',
  },
  {
    name: 'Owner',
    selector: 'email',
  },
  {
    name: 'Created',
    selector: 'createdAt',
  },
  {
    name: 'Updated',
    selector: 'updatedAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const PremiumUsernamesIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllPremiumUsernamesQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllPremiumUsernames?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllPremiumUsernames?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllPremiumUsernames?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllPremiumUsernames?.pageInfo?.endCursor])

  const userData =
    data?.getAllPremiumUsernames?.edges?.map((edge) => ({
      username: edge.node.username,
      expireDate: moment(edge.node.expireDate).format('DD-MM-YYYY'),
      email: (
        <Link href={'/users/view/' + edge.node.owner?.id}>
          <a href={'/users/view/' + edge.node.owner?.id}>{edge.node.owner?.email}</a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(edge.node.createdAt || '') / 1000).format('DD-MM-YYYY'),
      updatedAt: moment.unix(parseInt(edge.node.updatedAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/categories/edit/' + edge.node.id}>
              <DropdownItem href={'/categories/edit/' + edge.node.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Discounts"
        newButton={true}
        newButtonLink="/categories/add"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllPremiumUsernames?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllPremiumUsernames?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(PremiumUsernamesIndexPage)
