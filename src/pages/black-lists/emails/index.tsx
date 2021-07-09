import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'

import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useGetAllBlackListedEmailsQuery } from '../../../generated/graphql'
import DataTable from '../../../components/DataTable/DataTable'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Link from 'next/link'

const columns = [
  {
    name: 'Emails',
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
  const [{ data }] = useGetAllBlackListedEmailsQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllBlackListedEmails?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllBlackListedEmails?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllBlackListedEmails?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllBlackListedEmails?.pageInfo?.endCursor])

  const userData =
    data?.getAllBlackListedEmails?.edges?.map((edge) => ({
      keyword: edge.node.keyword,
      reason: edge.node.reason,
      createdAt: moment.unix(parseInt(edge.node.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/black-lists/edit/' + edge.node.id}>
              <DropdownItem href={'/black-lists/edit/' + edge.node.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Black Listed Emails"
        newButton={true}
        newButtonLink="/black-lists/add"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllBlackListedEmails?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllBlackListedEmails?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(BlackListedUsernamesIndexPage)
