import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'
import { createUrqlClient } from '../../utils/createUrqlClient'

const UsersIndexPage: NextPage = () => (
  <AdminLayout>
    <AdminHeader />
  </AdminLayout>
)

export default withUrqlClient(createUrqlClient, { ssr: true })(UsersIndexPage)
