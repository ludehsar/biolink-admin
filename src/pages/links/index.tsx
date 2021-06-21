import React, { useCallback, useState } from 'react'
import moment from 'moment'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { DropdownItem, DropdownMenu, DropdownToggle, Media, UncontrolledDropdown } from 'reactstrap'
import { useGetAllLinksQuery } from '../../generated/graphql'
import DataTable from '../../components/DataTable/DataTable'
import { FRONTEND_APP_URL } from '../../config/app'

const columns = [
  {
    name: 'Title',
    selector: 'linkTitleWithLinkImage',
  },
  {
    name: 'Link Type',
    selector: 'linkType',
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

const LinksIndexPage: NextPage = () => {
  const [after, setAfter] = useState<string>('')
  const [before, setBefore] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')
  const [{ data }] = useGetAllLinksQuery({
    variables: { options: { first: 10, after, before, query: searchText } },
  })

  const gotoPrevPage = useCallback(() => {
    setBefore(data?.getAllLinks?.pageInfo?.startCursor || '')
    setAfter('')
  }, [data?.getAllLinks?.pageInfo?.startCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllLinks?.pageInfo?.endCursor || '')
    setBefore('')
  }, [data?.getAllLinks?.pageInfo?.endCursor])

  const biolinkData =
    data?.getAllLinks?.edges?.map((edge) => ({
      linkTitleWithLinkImage: (
        <Media className="align-items-center">
          <Link href="#">
            <a className="avatar rounded-circle mr-3" href="#" onClick={(e) => e.preventDefault()}>
              <img alt="Biolink Profile" src={edge.node.linkImageUrl as string} />
            </a>
          </Link>
          <Media>
            <span className="mb-0 text-sm">{edge.node.linkTitle}</span>
          </Media>
        </Media>
      ),
      linkType: edge.node.linkType,
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
        hasNextPage={data?.getAllLinks?.pageInfo?.hasNextPage || false}
        hasPreviousPage={data?.getAllLinks?.pageInfo?.hasPreviousPage || false}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(LinksIndexPage)
