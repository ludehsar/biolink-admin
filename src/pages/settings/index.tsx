import React, { useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'

import { createUrqlClient } from '../../utils/createUrqlClient'
import AdminLayout from '../../layouts/Admin.layout'
import AdminHeader from '../../components/Header/AdminHeader'
import MainSettings from '../../components/settings/MainSettings'

const SettingsPage: NextPage = () => {
  const [activeMenus, setActiveMenus] =
    useState<
      | 'main'
      | 'links'
      | 'payments'
      | 'business'
      | 'captcha'
      | 'facebook-login'
      | 'ads'
      | 'socials'
      | 'email'
      | 'notifications'
    >('main')

  return (
    <AdminLayout>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Settings</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xl={3}>
                <div className="settings-nav">
                  <div
                    className={
                      activeMenus === 'main' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('main')}
                    onKeyDown={() => setActiveMenus('main')}
                    role="button"
                    tabIndex={0}
                  >
                    Main Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'links' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('links')}
                    onKeyDown={() => setActiveMenus('links')}
                    role="button"
                    tabIndex={0}
                  >
                    Links &amp; Biolink Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'payments' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('payments')}
                    onKeyDown={() => setActiveMenus('payments')}
                    role="button"
                    tabIndex={0}
                  >
                    Payments Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'business' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('business')}
                    onKeyDown={() => setActiveMenus('business')}
                    role="button"
                    tabIndex={0}
                  >
                    Business Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'captcha' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('captcha')}
                    onKeyDown={() => setActiveMenus('captcha')}
                    role="button"
                    tabIndex={0}
                  >
                    Captcha Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'facebook-login'
                        ? 'settings-nav-item active'
                        : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('facebook-login')}
                    onKeyDown={() => setActiveMenus('facebook-login')}
                    role="button"
                    tabIndex={0}
                  >
                    Facebook Login Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'ads' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('ads')}
                    onKeyDown={() => setActiveMenus('ads')}
                    role="button"
                    tabIndex={0}
                  >
                    Ads Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'socials' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('socials')}
                    onKeyDown={() => setActiveMenus('socials')}
                    role="button"
                    tabIndex={0}
                  >
                    Socials Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'email' ? 'settings-nav-item active' : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('email')}
                    onKeyDown={() => setActiveMenus('email')}
                    role="button"
                    tabIndex={0}
                  >
                    Email Settings
                  </div>
                  <div
                    className={
                      activeMenus === 'notifications'
                        ? 'settings-nav-item active'
                        : 'settings-nav-item'
                    }
                    onClick={() => setActiveMenus('notifications')}
                    onKeyDown={() => setActiveMenus('notifications')}
                    role="button"
                    tabIndex={0}
                  >
                    Notifications Settings
                  </div>
                </div>
              </Col>
              <Col xl={9}>{activeMenus === 'main' && <MainSettings />}</Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </AdminLayout>
  )
}

export default withUrqlClient(createUrqlClient)(SettingsPage)
