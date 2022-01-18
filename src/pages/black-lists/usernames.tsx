import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { useGetAllBlacklistedUsernamesQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'

const columns = [
  {
    name: 'Username',
    selector: 'keyword',
  },
  {
    name: 'Reason',
    selector: 'reason',
  },
  {
    name: 'Created',
    selector: 'createdAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const BlackListedUsernamesIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllBlacklistedUsernamesQuery({
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
    setBefore(data?.getAllBlackListedUsernames?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllBlackListedUsernames?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllBlackListedUsernames?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllBlackListedUsernames?.cursor.afterCursor])

  const userData =
    data?.getAllBlackListedUsernames?.data.map((username) => ({
      keyword: username.keyword,
      reason: username.reason,
      createdAt: moment.unix(parseInt(username.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/black-lists/edit/' + username.id}>
              <DropdownItem href={'/black-lists/edit/' + username.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Black Listed Usernames"
        newButton={true}
        newButtonLink="/black-lists/add"
        columns={columns}
        data={userData}
        hasNextPage={!!data?.getAllBlackListedUsernames?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllBlackListedUsernames?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(BlackListedUsernamesIndexPage)
