/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"
import FeatherIcon from "feather-icons-react"

import SEO from "../components/SEO"
import TitleBar from "../components/title-bar/title-bar.js"
import NavLink from "../components/nav-link/nav-link.js"
import Breadcrumb from "../components/breadcrumb/breadcrumb.js"
import ContactInfo from "../components/contact-info/contact-info.js"
import FollowUs from "../components/follow-us/follow-us.js"
import FooterBar from "../components/footer-bar/footer-bar.js"

export default () => {
  return (
    <>
      <SEO title={`Adatkezelés`} pathname={`/adatkezeles/`}></SEO>
      <TitleBar>
        <NavLink to="/shop">Terméklista</NavLink>
        <NavLink to="/gyakran-ismetelt-kerdesek/">
          <span>
            <FeatherIcon
              icon="help-circle"
              css={css`
                width: 18px;
                height: 18px;
                stroke: #c5c2ff;
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
                margin-right: 2px;
                top: 3px;
                position: relative;
              `}
            />
            Gyakran ismételt kérdések
          </span>
        </NavLink>
      </TitleBar>
      <div className={`bgWhite mt1 mb1`}>
        <div className={`container mx-responsive`}>
          <Breadcrumb>
            <Link to="/adatkezeles/">Adatkezelés</Link>
          </Breadcrumb>
          <h1 className={`titleLarger d-h1`}>Adatkezelés</h1>
        </div>
      </div>

      <div className="container mx-responsive mb1">
        <p>Az adatkezelési tájékoztató feltöltés alatt...</p>
      </div>

      <ContactInfo>
        <FollowUs></FollowUs>
      </ContactInfo>
      <FooterBar></FooterBar>
    </>
  )
}
