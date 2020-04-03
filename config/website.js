module.exports = {
    siteUrl: "https:/beta.varpo.fi/",
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'https://beta.varpo.fi/', // Navigation and Site Title
    titleAlt: 'Varpo', // Title for JSONLD
    description: "Vartiovuoren Pojat ry on Itä-Helsinkiläinen eräpartiolippukunta.",
    headline: 'Partiota poikien ehdoilla jo vuodesta 1959', // Headline for schema.org JSONLD
    url: 'https://beta.varpo.fi/', // Domain of your site. No trailing slash!
    siteLanguage: 'fi', // Language Tag on <html> element
    logo: 'src/images/varpo.jpg', // Used for SEO
    ogLanguage: 'fi_FI', // Facebook Language
    banner: 'src/images/varpo.jpg',

    // JSONLD / Manifest
    favicon: 'src/images/varpo.jpg', // Used for manifest favicon generation
    shortName: 'Varpo', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Vartiovuoren Pojat ry', // Author for schemaORGJSONLD
    themeColor: '#ff0000',
    backgroundColor: '#fff',

    // twitter: '@starter_prismicio', // Twitter Username
    facebook: 'vvartiovuoren.pojat', // Facebook Site Name
    googleAnalyticsID: 'UA-158731799-2',

    // skip,NavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}