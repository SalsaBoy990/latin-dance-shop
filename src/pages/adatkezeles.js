/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import TitleBar from "../components/title-bar/title-bar.js"
import Breadcrumb from "../components/breadcrumb/breadcrumb.js"
import ContactInfo from "../components/contact-info/contact-info.js"
import FollowUs from "../components/follow-us/follow-us.js"
import FooterBar from "../components/footer-bar/footer-bar.js"

export default () => {
  return (
    <>
      <SEO title={`Adatkezelés`} pathname={`/adatkezeles/`}></SEO>
      <TitleBar></TitleBar>
      <div
        className={`bgWhite mb1`}
        css={css`
          padding-top: 30px;
        `}
      >
        <div className={`container mx-responsive`}>
          <Breadcrumb>
            <Link to="/adatkezeles/">Adatkezelés</Link>
          </Breadcrumb>
          <h1 className={`titleLarger d-h1 mbhalf pbhalf`}>Adatkezelés</h1>
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
