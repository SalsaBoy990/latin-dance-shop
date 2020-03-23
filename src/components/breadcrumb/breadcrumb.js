// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"

import BreadcrumbStyles from "./breadcrumb.module.css"

const Breadcrumb = ({ children, to }) => {
  return (
    <nav className="breadcrumb mbhalf" aria-label="breadcrumbs">
      <ul>
        <li className={BreadcrumbStyles.breadcrumbText}>
          <Link to="/shop">Terméklista</Link>
        </li>
        <li
          className={`is-active ${BreadcrumbStyles.breadcrumbTextActive}`}
          aria-current="page"
        >
          {children}
        </li>
      </ul>
    </nav>
  )
}

export default Breadcrumb
