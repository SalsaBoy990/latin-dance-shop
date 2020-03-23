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
      <div className={`${HeaderBarStyles.bgWhite} mt1 mb1`}>
        <div className={`container mx-responsive`}>
          <h1
            className={`${HeaderBarStyles.introduction} mt1 mb1 title is-one is-weight-500`}
          >
            {`A ${data.site.siteMetadata.author} tánciskola bachata óráira itt vehetsz bérletet
        bankkártyával`}
          </h1>
        </div>
      </div>
      <div className={`container mx-responsive mthalf pbhalf`}>
        <h2 className={`${HeaderBarStyles.subtitle} mb0`}>Válassz a bérletek közül</h2>
      </div>
    </>
  )
}

export default HeaderBar
