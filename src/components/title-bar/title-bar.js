import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { motion } from "framer-motion"

import TitleBarStyles from "./title-bar.module.css"

const TitleBar = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          shortTitle
        }
      }
    }
  `)

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    // sets clicked boolean value
    const handleClick = () => setClicked(!clicked)

    const hamburgerBtn = document.getElementsByClassName("navbar-burger")[0]

    // listen to click
    hamburgerBtn.addEventListener("click", handleClick)

    return () => {
      // clean up the event handler when the component unmounts
      hamburgerBtn.removeEventListener("click", handleClick)
    }
  })

  return (
    <div className="">
    <header>
      <motion.div
        animate={{ height: clicked ? "148px" : "52px" }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        className={`${TitleBarStyles.bgPurple}`}
      >
        <div className={`container mx-responsive`}>
          <nav
            className={`navbar is-transparent ${TitleBarStyles.bgPurple}`}
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link
                to="/shop/"
                className={`navbar-item ${TitleBarStyles.title}`}
              >
                {data.site.siteMetadata.shortTitle}
              </Link>

              <motion.a
                whileHover={{
                  y: "1px",
                  transition: { type: "spring", duration: 0.8 },
                }}
                whileTap={{
                  y: "1px",
                  transition: { type: "spring", duration: 0.8 },
                }}
                role="button"
                className={
                  "navbar-burger burger" + (clicked ? " is-active" : "")
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </motion.a>
            </div>

            <div
              id="navbarBasicExample"
              className={"navbar-menu" + (clicked ? " is-active" : "")}
            >
              <div className="navbar-end">{children}</div>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
    </div>
  )
}

export default TitleBar
