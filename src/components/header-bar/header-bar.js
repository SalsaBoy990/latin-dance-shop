/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import HeaderBarStyles from "./header-bar.module.css"

const HeaderBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <div
        className={`${HeaderBarStyles.bgWhite} pt1`}
        css={css`
        padding-top: 30px;
        `}
      >
        <div className={` mx-responsive`}>
        
            
              <h1
                className={`${HeaderBarStyles.introduction} pbhalf mb0 title is-one is-weight-500`}
              >
                {`A ${data.site.siteMetadata.author} tánciskola bachata óráira itt vehetsz bérletet
        bankkártyával`}
              </h1>
            
    
        </div>
      </div>
      <div className={`container mx-responsive pbhalf`}>
        <h2 className={`${HeaderBarStyles.subtitle} mb0 mt1`}>
          Válassz a bérletek közül
        </h2>
      </div>
    </>
  )
}

export default HeaderBar
