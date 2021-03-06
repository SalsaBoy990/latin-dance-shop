/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import FeatherIcon from "feather-icons-react"

import SEO from "../../components/SEO"
import TitleBar from "../../components/title-bar/title-bar.js"
import HeaderBar from "../../components/header-bar/header-bar.js"
import ContactInfo from "../../components/contact-info/contact-info.js"
import FollowUs from "../../components/follow-us/follow-us.js"
import FooterBar from "../../components/footer-bar/footer-bar.js"
import ProductFront from "../../components/product-front/product-front.js"

export default () => {
  useEffect(() => {
    console.log(window.Snipcart)

    document.addEventListener("snipcart.ready", () => {
      window.Snipcart.api.session.setLanguage("hu", {
        checkout: {
          shipping_taxes_calculated_when_address_provided:
            "Nincs szállítási díj és az áfa benne van az árban.",
        },
      })
    })
  })

  return (
    <>
      <SEO title={`Terméklista`} pathname={`/shop/`}></SEO>
      <TitleBar>
        <button className="snipcart-checkout open-cart-btn">
          <span
            className="is-inline-block"
            css={css`
              margin-bottom: 1px;
              padding-left: 4px;
            `}
          >
            Kosár
            <FeatherIcon
              icon="shopping-cart"
              css={css`
                width: 18px;
                height: 18px;
                
                stroke-width: 1.5;
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
                margin-left: 4px;
                margin-right: 3px;
                top: 2px;
                right: 3px;
                position: relative;
              `}
            />
          </span>
          {/* <div
            className="snipcart-cart-header__count"
            css={css`
              color: #f20b97;
              font-size: 13px;
              font-weight: 600;
              position: absolute;
              top: 6px;
              right: 6px;
            `}
          >
          </div> */}
        </button>
      </TitleBar>
      <HeaderBar></HeaderBar>
      <ProductFront></ProductFront>

      <ContactInfo>
        <FollowUs></FollowUs>
      </ContactInfo>
      <FooterBar></FooterBar>
    </>
  )
}
