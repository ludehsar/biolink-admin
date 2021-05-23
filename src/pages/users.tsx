import React from 'react'
import { NextPage } from 'next'

import AdminLayout from '../layouts/Admin.layout'
import AdminHeader from '../components/Header/AdminHeader'

const UsersPage: NextPage = () => (
  <AdminLayout>
    <AdminHeader />
  </AdminLayout>
)

export default UsersPage
