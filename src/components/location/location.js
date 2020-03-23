// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import LocationStyles from "./location.module.css"

const Location = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          locationName
          locationUrl
          address
        }
      }
    }
  `)

  const place = data.site.siteMetadata

  return (
    <div className="container mx-responsive mb1">
      <div className="columns">
        <div className="column">
          <span className={`is-block ${LocationStyles.locationText}`}>
            {" "}
            Helyszín
          </span>
          <a href={place.locationUrl} target="_blank" rel="noreferrer noopener" className={LocationStyles.locationName}>
            {place.locationName}
          </a>
          <address className={LocationStyles.address}>{place.address}</address>
        </div>
      </div>
    </div>
  )
}

export default Location
