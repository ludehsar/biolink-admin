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
    setBefore(data?.getAllLinks?.cursor.beforeCursor || '')
    setAfter('')
  }, [data?.getAllLinks?.cursor.beforeCursor])

  const gotoNextPage = useCallback(() => {
    setAfter(data?.getAllLinks?.cursor.afterCursor || '')
    setBefore('')
  }, [data?.getAllLinks?.cursor.afterCursor])

  const biolinkData =
    data?.getAllLinks?.data.map((link) => ({
      linkTitleWithLinkImage: (
        <Media className="align-items-center">
          <Link href="#">
            <a className="avatar rounded-circle mr-3" href="#" onClick={(e) => e.preventDefault()}>
              <img alt="Link" src={link.linkImageUrl as string} />
            </a>
          </Link>
          <Media>
            <span className="mb-0 text-sm">{link.linkTitle}</span>
          </Media>
        </Media>
      ),
      email: (
        <Link href={'/users/view/' + link.user?.id}>
          <a href={'/users/view/' + link.user?.id}>{link.user?.email}</a>
        </Link>
      ),
      url: (
        <Link href={link.url || '#'}>
          <a href={link.url || '#'}>{link.url}</a>
        </Link>
      ),
      shortenedUrl: (
        <Link href={FRONTEND_APP_URL + '/' + link.shortenedUrl || '#'}>
          <a href={FRONTEND_APP_URL + '/' + link.shortenedUrl || '#'}>
            {FRONTEND_APP_URL + '/' + link.shortenedUrl}
          </a>
        </Link>
      ),
      createdAt: moment.unix(parseInt(link.createdAt || '') / 1000).format('DD-MM-YYYY'),
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
            <Link href={'/links/edit/' + link.id}>
              <DropdownItem href={'/links/edit/' + link.id}>Edit</DropdownItem>
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
        columns={columns}
        data={biolinkData}
        hasNextPage={!!data?.getAllLinks?.cursor.afterCursor}
        hasPreviousPage={!!data?.getAllLinks?.cursor.beforeCursor}
        nextButtonAction={gotoNextPage}
        prevButtonAction={gotoPrevPage}
        setSearchText={(text) => setSearchText(text)}
      />
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(LinksIndexPage)
