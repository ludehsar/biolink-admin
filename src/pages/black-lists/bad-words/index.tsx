import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import moment from 'moment'

import AdminHeader from '../../../components/Header/AdminHeader'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'
import { useGetAllBlackListedBadWordsQuery } from '../../../generated/graphql'
import DataTable from '../../../components/DataTable/DataTable'
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
  const [{ data }] = useGetAllBlackListedBadWordsQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllBlackListedBadWords?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllBlackListedBadWords?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllBlackListedBadWords?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllBlackListedBadWords?.pageInfo?.endCursor])

  const userData =
    data?.getAllBlackListedBadWords?.edges?.map((edge) => ({
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
        title="Black Listed Bad Words"
        newButton={true}
        newButtonLink="/categories/add"
        columns={columns}
        data={userData}
        hasNextPage={data?.getAllBlackListedBadWords?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllBlackListedBadWords?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(BlackListedUsernamesIndexPage)
