const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `The Pennington Co.`,
    description: `Wedding photographers from Raleigh, NC`,
    author: `Trevor Pennington`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              quality: 100,
              // wrapperStyle: 'margin-bottom:100px' **This also does not work for me
            },
          },
          `remark-image-attributes`,
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: [`margin-bottom`],
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      // this must be loaded first in order to work
      resolve: `gatsby-plugin-google-gtag`, // note this instead of gatsby-plugin-react-helmet
      options: {
        trackingIds: [process.env.G_TAG_TRACKING_ID],
      },
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        origin: "YOUR_SELF_HOSTED_ORIGIN",
        // Delays processing pageview events on route update (in milliseconds)
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/tpcFavicon.png`,
      },
    },
  ],
}
