let contentfulConfig
const path = require(`path`)

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) { }

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.ACCESS_TOKEN || contentfulConfig.accessToken,
}
console.log(contentfulConfig)
const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
  ],
  siteMetadata: {
    siteUrl:"https:varpo.fi",
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Vartiovuoren Pojat', // Navigation and Site Title
    titleAlt: 'varpo.fi', // Title for JSONLD
    description: "Vartiovuoren Pojat. Pariolippukunta Itä-Helsingistä. Erätoiminnan riemua jo vuodesta 1959. Perinteikäs, mutta notkea ja kehittyvä lippukunta. Pääkaupunkiseudun suurin poikkalippukunta. ",
    headline: 'Itä-Helsinkiläinen partiolippukunta', // Headline for schema.org JSONLD
    url: 'https://varpo.fi', // Domain of your site. No trailing slash!
    siteLanguage: 'fi', // Language Tag on <html> element
    logo: '/varpo-tunnus.png', // Used for SEO
    ogLanguage: 'fi_FI', // Facebook Language
    banner: '/varpo-tunnus.png',

    // JSONLD / Manifest
    favicon: 'static/varpo-tunnus.png', // Used for manifest favicon generation
    shortName: 'Varpo', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Varpo', // Author for schemaORGJSONLD
    themeColor: '#fc0303',
    backgroundColor: '#fff',

    // twitter: '@starter_prismicio', // Twitter Username
    facebook: 'vartiovuoren.pojat', // Facebook Site Name
    googleAnalyticsID: 'UA-158731799-1',

    // skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
  }
}
