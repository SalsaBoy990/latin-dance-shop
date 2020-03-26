// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import LocationStyles from "./location.module.css"

const Location = ({ locationId }) => {
  const data = useStaticQuery(graphql`
    query {
      defaultLocation: site {
        siteMetadata {
          locationName
          locationUrl
          address
        }
      }
      forma1: allLocationsYaml(filter: { name: { eq: "forma1" } }) {
        nodes {
          location_name
          location_url
          location_address
        }
      }
      online: allLocationsYaml(filter: { name: { eq: "online" } }) {
        nodes {
          location_name
          location_url
          location_address
        }
      }
    }
  `)

  const place = data.defaultLocation.siteMetadata
  const forma1 = data.forma1.nodes[0]
  const online = data.online.nodes[0]

  console.log(online)

  switch (locationId) {
    case "forma1":
      return (
        <div className="container mx-responsive mb1">
          <div className="columns">
            <div className="column">
              <span className={`is-block ${LocationStyles.locationText}`}>
                {" "}
                Helyszín
              </span>
              <a
                href={forma1.location_url}
                target="_blank"
                rel="noreferrer noopener"
                className={LocationStyles.locationName}
              >
                {forma1.location_name}
              </a>
              <address className={LocationStyles.address}>
                {forma1.location_address}
              </address>
            </div>
          </div>
        </div>
      )

    case "online":
      return (
        <div className="container mx-responsive mb1">
          <div className="columns">
            <div className="column">
              <span className={`is-block ${LocationStyles.locationText}`}>
                {" "}
                Online videó!
              </span>
              <a
                href={online.location_url}
                target="_blank"
                rel="noreferrer noopener"
                className={LocationStyles.locationName}
              >
                {online.location_name}
              </a>
              <address className={LocationStyles.address}>
                {online.location_address}
              </address>
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className="container mx-responsive mb1">
          <div className="columns">
            <div className="column">
              <span className={`is-block ${LocationStyles.locationText}`}>
                {" "}
                Helyszín
              </span>
              <a
                href={place.locationUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={LocationStyles.locationName}
              >
                {place.locationName}
              </a>
              <address className={LocationStyles.address}>
                {place.address}
              </address>
            </div>
          </div>
        </div>
      )
  }
}

export default Location
