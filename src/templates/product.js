/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import FeatherIcon from "feather-icons-react"

import SEO from "../components/SEO"
import Container from "../components/container/container"
import TitleBar from "../components/title-bar/title-bar.js"
import NavLink from "../components/nav-link/nav-link.js"
import Breadcrumb from "../components/breadcrumb/breadcrumb.js"
import Location from "../components/location/location.js"
import ContactInfo from "../components/contact-info/contact-info.js"
import FollowUs from "../components/follow-us/follow-us.js"
import FooterBar from "../components/footer-bar/footer-bar.js"
import SafePayment from "../components/safe-payment/safe-payment.js"

import ProductFrontStyles from "../components/product-front/product-front.module.css"

export default ({ data }) => {
  const product = data.my_products

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
      <SEO
        title={product.frontmatter.title}
        pathname={product.fields.slug}
        description={product.frontmatter.description}
      ></SEO>
      <TitleBar>
        <NavLink to="/shop">Terméklista</NavLink>
        <NavLink to="/gyakran-ismetelt-kerdesek/">
          <span>
            <FeatherIcon
              icon="help-circle"
              css={css`
                width: 18px;
                height: 18px;
                stroke: #c5c2ff;
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
                margin-right: 2px;
                top: 3px;
                position: relative;
              `}
            />
            Gyakran ismételt kérdések
          </span>
        </NavLink>
        <button
          className="snipcart-checkout"
          css={css`
            position: relative;
            background-color: #d4f8be;
            border: none;
            box-shadow: none;
            font-size: 15px;
            color: #474145;
            cursor: pointer;
          `}
        >
          <span
            className="is-inline-block"
            css={css`
              margin-bottom: 1px;
              padding-left: 4px;
            `}
          >
            Kosár
          </span>
          <FeatherIcon
            icon="shopping-cart"
            css={css`
              width: 18px;
              height: 18px;
              stroke: #474145;
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

      <div className={`${ProductFrontStyles.bgWhite} mb1`} css={css`padding-top: 30px; padding-bottom: 15px;`}>
        <div className={`container mx-responsive`}>
          <Breadcrumb>
            <Link to={product.fields.slug}>{product.frontmatter.title}</Link>
          </Breadcrumb>
          <h1 className={`${ProductFrontStyles.productTitleLarger} d-h1`}>
            {product.frontmatter.title}
          </h1>
        </div>
      </div>

      <div className="container mx-responsive" css={css`margin-bottom: 30px;`}>
        <p className={ProductFrontStyles.productDescription}>
          {product.frontmatter.description}
        </p>
      </div>

      <div className="container mr-responsive ml-responsive m-mr0 mt1">
        <div
          className={`mb1 columns ${ProductFrontStyles.productContainer} is-mobile mr0`}
          css={css`
            max-width: 500px;
            background: linear-gradient(180deg, #ffffff -24.38%, #eaf0e6 100%);
          `}
        >
          <div className={`column is-narrow`}>
            <div
              css={css`
                position: relative;
              `}
            >
              <a
                href={product.frontmatter.facebook_event}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img
                  fixed={product.frontmatter.coverImage.childImageSharp.fixed}
                  alt={`${product.frontmatter.title} borító`}
                />
                <div
                  css={css`
                    position: absolute;
                    background-color: rgba(255, 255, 255, 0.65);
                    padding-left: 5px;
                    margin-left: -5px;
                    bottom: 15px;
                    left: 15px;
                  `}
                >
                  <span
                    className="is-inline-block"
                    css={css`
                      text-decoration: underline;
                      color: #1a1718;
                      font-weight: 500;
                      font-size: 11px;
                    `}
                  >
                    Facebook<br></br> esemény
                  </span>
                  <FeatherIcon
                    icon="external-link"
                    css={css`
                      width: 18px;
                      height: 18px;
                      stroke: #474145;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      fill: none;
                      margin-left: 4px;
                      margin-right: 4px;
                      position: relative;
                      top: -3px;
                    `}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className={`column is-narrow`}>
            <p className={`${ProductFrontStyles.productDateDarker} mb0`}>
              {product.frontmatter.date}
            </p>
            <span
              className={`${ProductFrontStyles.productOccasions} is-block mbhalf`}
            >{`${product.frontmatter.occasions} alkalom`}</span>
            <span
              className={`${ProductFrontStyles.productPrice} is-block mbhalf`}
            >
              <span>
                <FeatherIcon
                  icon="tag"
                  css={css`
                    width: 18px;
                    height: 18px;
                    stroke: #7c787a;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    fill: none;
                    margin-right: 2px;
                  `}
                />
              </span>

              {product.frontmatter.price * product.frontmatter.recipients}
              <span
                className={ProductFrontStyles.productPriceDetails}
              >{` Ft,– / ${product.frontmatter.recipients} fő`}</span>
            </span>
            <span
              className={`${ProductFrontStyles.productOccasions} is-block`}
            >{`Érv.: ${product.frontmatter.valid}-ig`}</span>
          </div>
        </div>
      </div>

      <Location></Location>

      <Container>
        <div
          className="columns"
          css={css`
            max-width: 500px;
            padding-top: 30px;
          `}
        >
          <div
            className="column"
            css={css`
              padding-left: 6px;
            `}
          >
            <button
              className={`snipcart-add-item ${ProductFrontStyles.productBtnBuy} ${ProductFrontStyles.productBtnBuyBox} level`}
              css={css`
                padding-left: 20px;
                padding-right: 20px;
                height: 44px;
                border: 1.5px solid #f29dd1;
                box-shadow: none;
                width: 100%;
                background: #fff;
                cursor: pointer;
              `}
              data-item-id={product.id}
              data-item-price={product.frontmatter.price}
              data-item-quantity={product.frontmatter.recipients}
              data-item-min-quantity={product.frontmatter.recipients}
              data-item-max-quantity={product.frontmatter.recipients}
              data-item-url={product.fields.slug}
              data-item-name={product.frontmatter.title}
              data-item-image={product.frontmatter.coverImage.publicURL}
              data-item-description={`${product.frontmatter.description}, ${product.frontmatter.date}`}
              data-item-taxable={false}
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
                className={`level-item`}
              >
                <FeatherIcon
                  icon="shopping-cart"
                  className="featherIcon"
                  css={css`
                    width: 18px;
                    height: 18px;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    fill: none;
                    margin-right: 4px;
                    top: -1px;
                    position: relative;
                  `}
                />
                <span
                  className="is-inline-block"
                  css={css`
                    margin-top: -2px;
                  `}
                >
                  Kosárba rak
                </span>
              </motion.span>
            </button>
          </div>
          <div
            className="column is-invisible-tablet"
            css={css`
              padding-right: 6px;
            `}
          >
            <AniLink
              swipe
              direction="right"
              duration={0.28}
              to="/shop"
              className={`${ProductFrontStyles.productBtnBack} level`}
            >
              <div
                className={`${ProductFrontStyles.productBtnBackBox} level-item`}
              >
                <span>Vissza</span>
              </div>
            </AniLink>
          </div>
        </div>
      </Container>

      <SafePayment></SafePayment>

      <ContactInfo>
      <FollowUs></FollowUs>
      </ContactInfo>

      <FooterBar></FooterBar>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    my_products: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date
        price
        recipients
        occasions
        valid(locale: "hu", formatString: "YYYY. MM. DD.")
        facebook_event
        coverImage {
          publicURL
          childImageSharp {
            fixed(width: 135) {
              ...GatsbyImageSharpFixed
              srcSet
            }
          }
        }
      }
    }
  }
`
