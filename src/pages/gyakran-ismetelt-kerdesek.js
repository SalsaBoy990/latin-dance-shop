/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Accordion from "../components/accordion/accordion.js"
import TitleBar from "../components/title-bar/title-bar.js"
import Breadcrumb from "../components/breadcrumb/breadcrumb.js"
import ContactInfo from "../components/contact-info/contact-info.js"
import FollowUs from "../components/follow-us/follow-us.js"
import FooterBar from "../components/footer-bar/footer-bar.js"

const Gyik = () => {
  return (
    <>
      <SEO title={`GYIK`} pathname={`/gyakran-ismetelt-kerdesek/`}></SEO>
      <TitleBar></TitleBar>
      <div
        className={`bgWhite mb1`}
        css={css`
          padding-top: 30px;
        `}
      >
        <div className={`container mx-responsive`}>
          <Breadcrumb>
            <Link to="/gyakran-ismetelt-kerdesek/">
              Gyakran ismételt kérdések
            </Link>
          </Breadcrumb>
          <h1 className={`titleLarger d-h1 pbhalf`}>
            Gyakran ismételt kérdések
          </h1>
        </div>
      </div>

      <div className="container m0-responsive mb1">
        <div className="columns is-half-desktop">
          <div
            className="column is-narrow"
            css={css`
              max-width: 700px;
            `}
          >
            <Accordion
              id="1"
              title="Kérhetek-e visszatérítést, ha mégsem megyek el az órákra?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              id="2"
              title="Átjelentkezhetek-e egy másik tanfolyamra a bérletemmel?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
              id="3"
              title="A vásárolt táncbérletemet átruházhatom-e másra?"
              content="
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
            />
          </div>
        </div>
      </div>

      <ContactInfo>
        <FollowUs></FollowUs>
      </ContactInfo>
      <FooterBar></FooterBar>
    </>
  )
}

export default Gyik
