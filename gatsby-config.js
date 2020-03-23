/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `SzlaVi Dance Art webshop`,
    shortTitle: `SzlaVi Dance—webshop`,
    author: `SzlaVi Dance Art`,
    description: `Webshop bérletvásárlás. Gyere és tanulj nálunk bachatát. `,
    siteUrl: `https://szlavi-dance-shop.netlify.com`,
    tel: `06 30 260 64 11`,
    email: `szlavidanceart@gmail.com`,
    facebook: `https://www.facebook.com/szlavidanceart/`,
    locationUrl: `https://www.facebook.com/formaegyfitnesz/`,
    locationName: `Forma 1 Fitnesz Stúdió`,
    address: `6722 Szeged, Attila u. 17–19. legfelső em.`,
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Encode Sans`,
            variants: [`400`, `500`, `600`, `700`],
            subsets: [`latin-ext`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/images`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SzlaVi Dance Art Shop`,
        short_name: `SzlaVi Dance Shop`,
        start_url: `/shop/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.GATSBY_SNIPCART,
        autopop: true,
        js: "https://cdn.snipcart.com/themes/v3.0.10/default/snipcart.js",
        styles: false,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/src/components/title-bar', '/src/components/follow-us'], // Ignore files/folders
        // purgeOnly: ["/src/styles/global.css"], // Purge only these files/folders
      },
    },
  ],
}
