import Link from 'next/link'
import React from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Nav,
  Navbar,
  UncontrolledDropdown,
} from 'reactstrap'
import { Dispatch } from 'redux'
import { useLogoutMutation, User } from '../../generated/graphql'
import { AUTH_LOADING_REQUESTED, AUTH_LOGOUT_REQUESTED } from '../../redux/actions/authAction'

export interface AdminNavbarProps {
  brandText: string
  user: User
  startAuthenticationProcess: () => void
  logoutCurrentUser: () => void
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({
  brandText,
  user,
  startAuthenticationProcess,
  logoutCurrentUser,
}) => {
  const [{ fetching }, logout] = useLogoutMutation()
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link href="/">
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              {brandText}
            </a>
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="profile"
                      src={`https://ui-avatars.com/api/?name=${user?.email || 'User Email'}`}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {user?.email || 'User Email'}
                    </span>
                  </Media>
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
        </Container>
      </Navbar>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar)
