/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const SafePayments = () => {
  const data = useStaticQuery(graphql`
    query {
      safePayments: file(
        relativePath: { eq: "images/biztonsagos-fizetes.png" }
      ) {
        childImageSharp {
          fixed(width: 140, pngQuality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={`container mx-responsive`} css={css`padding-top: 30px;`}>
      <div className={`columns`}>
        <div className={`column has-text-centered has-text-left-tablet`}>
          <Img
            fixed={data.safePayments.childImageSharp.fixed}
            css={css`
            `}
          ></Img>
        </div>
      </div>
    </div>
  )
}

export default SafePayments
