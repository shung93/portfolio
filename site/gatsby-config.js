const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`) })

module.exports = {
  siteMetadata: {
    title: `sam's portfolio`,
    siteUrl: `https://www.sam-h.dev`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark", 
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE_ID
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E4DDE0`,
        theme_color: `#E4DDE0`,
        display: `minimal-ui`,
        icon: `src/images/smh.png`,
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'cdkstaticwebsitestack-websitebucket75c24d94-q3z1dnm4ng6f',
          bucketPrefix: 'production/public',
          acl: null,
      },
    }
  ]
};