import React from 'react'
import { Container } from 'reactstrap'

import AdminNavbar from '../components/Navbar/AdminNavbar'
import AdminSidebar from '../components/Sidebar/AdminSidebar'
import AdminFooter from '../components/Footer/AdminFooter'
import { FRONTEND_APP_NAME } from '../config/app'

const AdminLayout: React.FC = ({ children }) => {
  return (
    <>
      <AdminSidebar
        logo={{
          link: '/',
          imgSrc: '/img/brand/logo.png',
          imgAlt: 'Logo',
        }}
      />
      <div className="main-content">
        <AdminNavbar brandText={FRONTEND_APP_NAME} />
        {children}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  )
}

export default AdminLayout
