/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import FollowUsStyles from "./follow-us.module.css"

const FollowUs = () => {
  const data = useStaticQuery(graphql`
    query {
      facebookUrl: site {
        siteMetadata {
          facebook
        }
      }
      facebookLogo: file(relativePath: { eq: "images/facebook-logo.png" }) {
        childImageSharp {
          fixed(width: 18, pngQuality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={`is-inline-block`}>
      <a href={data.facebookUrl.siteMetadata.facebook} target="_blank" rel="noreferrer noopener">
        <Img
          fixed={data.facebookLogo.childImageSharp.fixed}
          css={css`
            top: 3px;
            position: relative;
          `}
        ></Img>
        <span
          className={FollowUsStyles.followUsText}
          css={css`
            padding-left: 4px;
            padding-bottom: 8px;
          `}
        >
          Kövess minket
        </span>
      </a>
    </div>
  )
}

export default FollowUs
