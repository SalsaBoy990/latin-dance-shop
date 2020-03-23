/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"

import FooterBarStyles from "./footer-bar.module.css"

const FooterBar = () => {
  return (
    <div className={`${FooterBarStyles.footerBg}`}>
      <div className="container mx-responsive has-text-centered">
        <nav role="navigation" aria-label="footer navigation">
          <div className={`columns is-mobile is-centered-mobile`} css={css`max-width: 440px;`}>
            <div className="column is-three-quarters-tablet is-half-desktop">
              <div className={`columns is-mobile`}>
                <div className="column is-quarter-tablet">
                  <Link className={`${FooterBarStyles.footerElement} pthalf pbhalf`} to="/adatkezeles/">
                    Adatkezelés
                  </Link>
                </div>
                <div className="column is-quarter-tablet">
                  <Link className={`${FooterBarStyles.footerElement} pthalf pbhalf`} to="/impresszum/">
                    Impresszum
                  </Link>
                </div>
                <div className="column is-quarter-tablet">
                  <Link className={`${FooterBarStyles.footerElement} pthalf pbhalf`} to="/gyakran-ismetelt-kerdesek/">
                    GYIK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default FooterBar
