import React from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import AdminLayout from '../layouts/Admin.layout'
import AdminHeader from '../components/Header/AdminHeader'
import { createUrqlClient } from '../utils/createUrqlClient'

const IndexPage: NextPage = () => (
  <AdminLayout>
    <AdminHeader />
  </AdminLayout>
)

export default withUrqlClient(createUrqlClient)(IndexPage)
