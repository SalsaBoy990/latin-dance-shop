// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"

import NavLinkStyles from "./nav.link.module.css"


const NavLink = ({ children, to }) => (
  <Link to={to} className={`navbar-item ${NavLinkStyles.navLink}`} activeClassName={"navbar-item is-active"}>
  {children}
</Link>
)

export default NavLink