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
      <SEO
        title={`Az oldal nem található`}
        pathname={`/404/`}
        description={`Az általad keresett oldal nem létezik. Menj a terméklista oldalra, ahol az összes aktuális bérlet elérhető.`}
      ></SEO>
      <TitleBar></TitleBar>
      <div className={`bgWhite mt1 mb1`}>
        <div className={`container mx-responsive`}>
          <Breadcrumb>
            <Link to="/404/">Az oldal nem található</Link>
          </Breadcrumb>
          <h1 className={`titleLarger d-h1`}>Az oldal nem található</h1>
        </div>
      </div>

      <div className="container mx-responsive mb1">
        <p className="mbhalf">Az oldal nem található.</p>
        <Link to="/shop/">Ugrás a terméklistára</Link>
      </div>

      <ContactInfo>
        <FollowUs></FollowUs>
      </ContactInfo>
      <FooterBar></FooterBar>
    </>
  )
}
