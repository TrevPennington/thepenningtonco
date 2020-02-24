module.exports = {
  siteMetadata: {
    title: `The Pennington Co.`,
    description: `Husband and wife wedding photographers from Raleigh, NC`,
    author: `Trevor Pennington`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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

    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'thePenningtonCo',
        pages: [{
          type: 'Post',          // Custom type of the document
          match: '/blog/:uid',   // Pages will be generated in this pattern
          path: '/blog-preview', // Placeholder route for previews
          component: require.resolve('./src/templates/post.js') // Template file
        }]
      }
    },
  ],
}
