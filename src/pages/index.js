// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import TitleBar from "../components/title-bar/title-bar.js"
import NavLink from "../components/nav-link/nav-link.js"
import ContactInfo from "../components/contact-info/contact-info.js"
import FollowUs from "../components/follow-us/follow-us.js"
import FooterBar from "../components/footer-bar/footer-bar.js"

export default () => {

  return (
    <>
      <SEO title={`Landing oldal`} pathname={`/`}></SEO>
      <TitleBar>
        <NavLink to="/admin/">
          Admin
        </NavLink>
      </TitleBar>
      <div className={`bgWhite mt1 mb1`}>
        <div className="container mx-responsive mb1">
          <h1 className={`titleLarger d-h1 mb1`}>Landing oldal jön ide...</h1>
          <Link to="/shop/">Ugrás a SzlaVi Dance Shop-ra</Link>
        </div>
      </div>

      <ContactInfo>
        <FollowUs></FollowUs>
      </ContactInfo>
      <FooterBar></FooterBar>
      <script src="/admin/identity.js"></script>
    </>
  )
}
