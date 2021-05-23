import React from 'react'
import { Container } from 'reactstrap'

const AdminHeader: React.FC = ({ children }) => (
  <>
    <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      <Container fluid>
        <div className="header-body">{children}</div>
      </Container>
    </div>
  </>
)

export default AdminHeader
