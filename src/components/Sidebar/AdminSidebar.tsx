import React, { useState } from 'react'
import {
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
  UncontrolledCollapse,
  UncontrolledDropdown,
} from 'reactstrap'
import Link from 'next/link'

import AdminNavLink from '../NavLink/AdminNavLink'
import { connect, RootStateOrAny } from 'react-redux'
import { useLogoutMutation, User } from '../../generated/graphql'
import { Dispatch } from 'redux'
import { AUTH_LOADING_REQUESTED, AUTH_LOGOUT_REQUESTED } from '../../redux/actions/authAction'

export interface AdminSidebarProps {
  logo: {
    link: string
    imgSrc: string
    imgAlt: string
  }
  user: User
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
}

interface ILink {
  href: string
  icon?: string
  name: string
  children?: ILink[]
}

const links: ILink[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: 'ni ni-tv-2',
  },
  {
    name: 'Manage Users',
    href: '#users',
    icon: 'ni ni-single-02',
    children: [
      {
        name: 'Users',
        href: '/users',
      },
      {
        name: 'Admins',
        href: '/users/admins',
      },
    ],
  },
  {
    name: 'Admin Roles',
    href: '/admin-roles',
    icon: 'ni ni-badge',
  },
  {
    name: 'Categories',
    href: '/categories',
    icon: 'ni ni-books',
  },
  {
    name: 'Manage Biolinks',
    href: '#biolinks',
    icon: 'ni ni-app',
    children: [
      {
        name: 'Biolinks',
        href: '/biolinks',
      },
      {
        name: 'Directories',
        href: '/biolinks/directories',
      },
    ],
  },
  {
    name: 'Manage Links',
    href: '#links',
    icon: 'ni ni-compass-04',
    children: [
      {
        name: 'Links',
        href: '/links',
      },
      {
        name: 'Embedded Links',
        href: '/links/embeds',
      },
    ],
  },
  {
    name: 'Plans',
    href: '/plans',
    icon: 'ni ni-tag',
  },
  {
    name: 'Manage Black Lists',
    href: '#black-lists',
    icon: 'ni ni-istanbul',
    children: [
      {
        name: 'Bad Words',
        href: '/black-lists/bad-words',
      },
      {
        name: 'Emails',
        href: '/black-lists/emails',
      },
      {
        name: 'Usernames',
        href: '/black-lists/usernames',
      },
    ],
  },
]

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  logo,
  user,
  startAuthenticationProcess,
  logoutCurrentUser,
}) => {
  const [{ fetching }, logout] = useLogoutMutation()

  const [collapseOpen, setCollapseOpen] = useState(false)

  const toggleCollapse = (): void => {
    setCollapseOpen((data) => !data)
  }

  let navbarBrandProps
  if (logo && logo.link) {
    navbarBrandProps = {
      to: logo.link,
    }
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidebar-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img alt={logo.imgAlt} className="navbar-brand-img" src={logo.imgSrc} />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="User profile"
                    src={`https://ui-avatars.com/api/?name=${user?.email || 'User Email'}`}
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <Link href="/admin/user-profile">
                <DropdownItem>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
              </Link>
              <Link href="/admin/user-profile">
                <DropdownItem>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
              </Link>
              <Link href="/admin/user-profile">
                <DropdownItem>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
              </Link>
              <Link href="/admin/user-profile">
                <DropdownItem>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
              </Link>
              <DropdownItem divider />
              <Link href="#logout">
                <DropdownItem
                  onClick={async () => {
                    startAuthenticationProcess()
                    await logout() // Send logout request via graphql
                    logoutCurrentUser() // Remove user state from the client
                  }}
                >
                  {fetching ? (
                    <>
                      <i className="fa fa-spinner fa-spin"></i>
                      <span>Logging out</span>
                    </>
                  ) : (
                    <>
                      <i className="ni ni-user-run" />
                      <span>Logout</span>
                    </>
                  )}
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  <Link href={logo.link}>
                    <img alt={logo.imgAlt} src={logo.imgSrc} />
                  </Link>
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Navigation */}
          <Nav navbar>
            {links.map((link, key) => {
              if (!link.children || link.children.length <= 0) {
                return (
                  <NavItem {...{ key }}>
                    <AdminNavLink href={link.href}>
                      <i className={link.icon}></i>
                      {link.name}
                    </AdminNavLink>
                  </NavItem>
                )
              } else {
                return (
                  <NavItem {...{ key }}>
                    <AdminNavLink
                      href={link.href}
                      as={link.href.slice(1) + '-dropdown'}
                      dataToggle="collapse"
                      ariaExpanded={true}
                      ariaControls={link.href.slice(1) + '-dropdown'}
                      role="button"
                      id={link.href.slice(1)}
                    >
                      <i className={link.icon}></i>
                      {link.name}
                    </AdminNavLink>
                    <UncontrolledCollapse id={link.href.slice(1) + '-dropdown'} toggler={link.href}>
                      <Nav className="nav-sm flex-column">
                        {link.children &&
                          link.children.map((childLink, key2) => (
                            <NavItem key={key2}>
                              <AdminNavLink href={childLink.href}>{childLink.name}</AdminNavLink>
                            </NavItem>
                          ))}
                      </Nav>
                    </UncontrolledCollapse>
                  </NavItem>
                )
              }
            })}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = (
  state: RootStateOrAny
): {
  user: User
} => ({
  user: state.authReducer.user,
})

const mapDispatchToProps = (
  dispatch: Dispatch
): {
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
} => ({
  startAuthenticationProcess: () => dispatch({ type: AUTH_LOADING_REQUESTED }),
  logoutCurrentUser: () => dispatch({ type: AUTH_LOGOUT_REQUESTED }),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminSidebar)
