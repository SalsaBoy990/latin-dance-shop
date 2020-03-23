/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeatherIcon from "feather-icons-react"

import ContactInfoStyles from "./contact-info.module.css"

const ContactInfo = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          tel
          email
        }
      }
    }
  `)

  return (
    <div className="container mx-responsive">
      <div className="columns is-centered-mobile" >
        <div className="column is-half-tablet is-quarter-desktop" css={css`max-width: 440px;`}>
          <h2 className={`${ContactInfoStyles.contactTitle} mt1 mbhalf`}>
            Kérdéseddel nyugodtan fordulj hozzánk!
          </h2>
          <ul className="mb2">
            <li
              css={css`
                margin-bottom: 8px;
              `}
            >
              <div className={ContactInfoStyles.phoneNumber}>
                <FeatherIcon
                  icon="phone"
                  className={ContactInfoStyles.featherSvg}
                  css={css`
                    top: 2px;
                    position: relative;
                  `}
                />
                <a href={`tel:${data.site.siteMetadata.tel}`}
                  css={css`
                    color: #37519c;
                    padding-left: 3px;
                  `}
                >
                  {data.site.siteMetadata.tel}
                </a>
              </div>
            </li>
            <li
              css={css`
                margin-bottom: 8px;
              `}
            >
              <div className={ContactInfoStyles.email}>
                <FeatherIcon
                  icon="mail"
                  className={ContactInfoStyles.featherSvg}
                  css={css`
                    top: 4px;
                    position: relative;
                  `}
                />

                <a href={`mailto:${data.site.siteMetadata.email}`}
                  css={css`
                    color: #474145;
                    padding-left: 4px;
                  `}
                >
                  {data.site.siteMetadata.email}
                </a>
              </div>
            </li>
            <li>
              {children}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
