import React from 'react'
import { NextPage } from 'next'

import AdminHeader from '../../components/Header/AdminHeader'
import AdminLayout from '../../layouts/Admin.layout'

const UsersIndexPage: NextPage = () => (
  <AdminLayout>
    <AdminHeader />
  </AdminLayout>
)

export default UsersIndexPage
