import React from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Link, { LinkProps } from 'next/link'
import { NavLink } from 'reactstrap'
import { UrlObject } from 'url'

type AdminNavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string
  dataToggle?: string
  ariaExpanded?: boolean
  ariaControls?: string
  id?: string
  role?: string
}

const AdminNavLink: React.FC<AdminNavLinkProps> = ({
  children,
  dataToggle,
  ariaExpanded,
  ariaControls,
  id,
  role,
  activeClassName = 'active',
  ...props
}) => {
  const { asPath } = useRouter()

  const isActive = asPath === props.href || asPath === props.as

  const className = cx({ [activeClassName]: isActive })

  return (
    <Link {...props}>
      <NavLink
        className={className || undefined}
        href={(props.href as string) || (props.href as UrlObject).href || undefined}
        data-toggle={dataToggle}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        {...{ id, role }}
      >
        {children}
      </NavLink>
    </Link>
  )
}

export default AdminNavLink
