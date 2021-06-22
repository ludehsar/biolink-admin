import React, { useCallback, useState } from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'
import { Media, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import DataTable from '../../../components/DataTable/DataTable'
import AdminHeader from '../../../components/Header/AdminHeader'
import { FRONTEND_APP_URL } from '../../../config/app'
import { useGetAllEmbedsQuery } from '../../../generated/graphql'
import AdminLayout from '../../../layouts/Admin.layout'
import { createUrqlClient } from '../../../utils/createUrqlClient'

const columns = [
  {
    name: 'Title',
    selector: 'linkTitleWithLinkImage',
  },
  {
    name: 'User',
    selector: 'email',
  },
  {
    name: 'URL',
    selector: 'url',
  },
  {
    name: 'Shortened URL',
    selector: 'shortenedUrl',
  },
  {
    name: 'Joined',
    selector: 'createdAt',
  },
  {
    name: '',
    selector: 'action',
  },
]

const EmbedsIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllEmbedsQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllEmbeds?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllEmbeds?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllEmbeds?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllEmbeds?.pageInfo?.endCursor])

  const biolinkData =
    data?.getAllEmbeds?.edges?.map((edge) => ({
      linkTitleWithLinkImage: (
        <Media className="align-items-center">
          <Link href="#">
            <a className="avatar rounded-circle mr-3" href="#" onClick={(e) => e.preventDefault()}>
              <img alt="Link" src={edge.node.linkImageUrl as string} />
            </a>
          </Link>
          <Media>
            <span className="mb-0 text-sm">{edge.node.linkTitle}</span>
          </Media>
        </Media>
      ),
      email: (
        <Link href={'/users/view/' + edge.node.user?.id}>
          <a href={'/users/view/' + edge.node.user?.id}>{edge.node.user?.email}</a>
        </Link>
      ),
      url: (
        <Link href={edge.node.url || '#'}>
          <a href={edge.node.url || '#'}>{edge.node.url}</a>
        </Link>
      ),
      shortenedUrl: (
        <Link href={FRONTEND_APP_URL + '/' + edge.node.shortenedUrl || '#'}>
          <a href={FRONTEND_APP_URL + '/' + edge.node.shortenedUrl || '#'}>
            {FRONTEND_APP_URL + '/' + edge.node.shortenedUrl}
          </a>
        </Link>
      ),
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
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              View Details
            </DropdownItem>
            <Link href={'/users/edit/' + edge.node.id}>
              <DropdownItem href={'/users/edit/' + edge.node.id}>Edit</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    })) || []

  return (
    <AdminLayout>
      <AdminHeader />
      <DataTable
        title="Links"
        newButton={true}
        newButtonLink={'/users/add'}
        columns={columns}
        data={biolinkData}
        hasNextPage={data?.getAllEmbeds?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllEmbeds?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(EmbedsIndexPage)
