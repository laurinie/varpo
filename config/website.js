module.exports = {
    siteUrl: "https:beta.varpo.fi",
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Vartiovuoren Pojat', // Navigation and Site Title
    titleAlt: 'beta.varpo.fi', // Title for JSONLD
    description: "Vartiovuoren Pojat. Pariolippukunta Itä-Helsingistä. Erätoiminnan riemua jo vuodesta 1959. Perinteikäs, mutta notkea ja kehittyvä lippukunta. Pääkaupunkiseudun suurin poikkalippukunta. ",
    headline: 'Itä-Helsinkiläinen partiolippukunta', // Headline for schema.org JSONLD
    url: 'https://beta.varpo.fi', // Domain of your site. No trailing slash!
    siteLanguage: 'fi', // Language Tag on <html> element
    logo: 'src/images/varpo_tunnus-color-transparent.png', // Used for SEO
    ogLanguage: 'fi_FI', // Facebook Language
    banner: 'src/images/varpo_tunnus-color-transparent.png',

    // JSONLD / Manifest
    favicon: 'src/images/varpo_tunnus-color-transparent.png', // Used for manifest favicon generation
    shortName: 'Varpo', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Varpo', // Author for schemaORGJSONLD
    themeColor: '#fc0303',
    backgroundColor: '#fff',

    // twitter: '@starter_prismicio', // Twitter Username
    facebook: 'vartiovuoren.pojat', // Facebook Site Name
    googleAnalyticsID: 'UA-158731799-1',

    // skip,NavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}