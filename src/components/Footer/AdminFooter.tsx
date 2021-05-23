import Link from 'next/link'
import React from 'react'
import { Row, Col } from 'reactstrap'

import { FRONTEND_APP_URL } from '../../config/app'

const AdminFooter: React.FC = () => (
  <footer className="footer">
    <Row className="align-items-center justify-content-xl-between">
      <Col xl="6">
        <div className="copyright text-center text-xl-left text-muted">
          &copy; {new Date().getFullYear()}{' '}
          <Link href={FRONTEND_APP_URL}>
            <a className="font-weight-bold ml-1" target="_blank" rel="noopener noreferrer">
              Stash.ee
            </a>
          </Link>
        </div>
      </Col>
    </Row>
  </footer>
)

export default AdminFooter
