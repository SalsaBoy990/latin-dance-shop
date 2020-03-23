/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"

import FeatherIcon from "feather-icons-react"
import ProductFrontStyles from "./product-front.module.css"

const ProductFront = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___price, order: ASC }
        limit: 10
        filter: {frontmatter: {active: {eq: true}}}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
              occasions
              price
              recipients
              valid(locale: "hu", formatString: "YYYY. MM. DD.")
              facebook_event
              coverImage {
                childImageSharp {
                  fixed(width: 135) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const products = data.allMarkdownRemark

  return (
    <div className="container mr-responsive ml-responsive">
      <div className={`columns is-multiline is-desktop`}>
        {products.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`mb1 column ${ProductFrontStyles.productContainer} mrhalf m-mr0`}
            css={css`
              background: linear-gradient(
                180deg,
                #ffffff -24.38%,
                #EAF0E6 100%
              );
            `}
          >
            <div className={`columns is-mobile`}>
              <div className={`column is-narrow`}>
                <Link to={node.fields.slug}>
                  <Img
                    fixed={node.frontmatter.coverImage.childImageSharp.fixed}
                    alt={`${node.frontmatter.title} borító`}
                  />
                </Link>
              </div>
              <div className={`column`}>
                <Link to={node.fields.slug}>
                  <h3 className={ProductFrontStyles.productTitle}>
                    {node.frontmatter.title}
                  </h3>
                </Link>
                <span
                  className={ProductFrontStyles.productOccasions}
                >{`${node.frontmatter.occasions} alkalom`}</span>
                <p className={`${ProductFrontStyles.productDate} mbhalf`}>
                  {node.frontmatter.date}
                </p>
                <div className={`columns`}>
                  <div
                    className={`column `}
                    css={css`
                      width: 180px;
                      @media (max-width: 768px) {
                        width: 100%;
                      }

                      
                    `}
                  >
                    <AniLink
                      swipe
                      direction="left"
                      duration={0.28}
                      to={node.fields.slug}
                      className={`${ProductFrontStyles.productBtn} level`}
                    >
                      <div
                        className={`${ProductFrontStyles.productBtnBox} level-item`}
                      >
                        <motion.span
                          whileHover={{
                            x: "1px",
                            transition: {
                              type: "spring",
                              stiffness: 85,
                              duration: 0.85,
                            },
                          }}
                        >
                          Részletek
                          <FeatherIcon
                            icon="arrow-right"
                            className="featherIcon"
                            css={css`
                              top: 4px;
                              position: relative;
                              width: 18px;
                              height: 18px;
                              stroke-width: 2;
                              stroke-linecap: round;
                              stroke-linejoin: round;
                              fill: none;
                            `}
                          />
                        </motion.span>
                      </div>
                    </AniLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductFront
