const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `The Pennington Co.`,
    description: `Raleigh, NC`,
    author: `Trevor Pennington`,
  },
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // `gatsby-transformer-remark`,

    {
      resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              withWebp: true,
              showCaptions: true,
              quality: 100,
              
            },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // {
    //   resolve: `gatsby-source-prismic-graphql`,
    //   options: {
    //     repositoryName: 'thePenningtonCo',
    //     pages: [{
    //       type: 'Post',          // Custom type of the document
    //       match: '/blog/:uid',   // Pages will be generated in this pattern
    //       path: '/blog-preview', // Placeholder route for previews
    //       component: require.resolve('./src/templates/post.js') // Template file
    //     }]
    //   }
    // },
  ],
}
