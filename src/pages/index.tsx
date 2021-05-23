import React from 'react'
import { NextPage } from 'next'

import AdminLayout from '../layouts/Admin.layout'
import AdminHeader from '../components/Header/AdminHeader'

const IndexPage: NextPage = () => (
  <AdminLayout>
    <AdminHeader />
  </AdminLayout>
)

export default IndexPage
