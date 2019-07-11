module.exports = {
  siteMetadata: {
    title: `Varpo`,
    description: `Vartiovuoren Pojat - Erähenkinen partiolippukunta Itä-Helsingistä. Vartiovuoren Pojat eli lyhennettynä Varpo on pääkaupunkiseudun suurin poikalippukunta.`,
    author: `@laurinie`,
    menuLinks: [
      {
        "name": "Etusivu",
        "url": "/"
      },
      {
        "name": "Kokousajat",
        "url": "kokousajat"
      },
      {
        "name": "Tapahtumat ja tiedotteet",
        "url": "kalenteri"
      },
      {
        "name": "Yhteystiedot",
        "url": "johtajat"
      },
      {
        "name": "Tietoja lippukunnasta",
        "url": "lippukunta"
      },
      {
        "name": "Kuvagalleria",
        "url": "https://get.google.com/albumarchive/117985396226675248453"
      },
      {
        "name": "Vanhempainyhdistys",
        "url": "vanhempainyhdistys"
      },
      {
        "name": "Kilpi",
        "url": "kilpi"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId:"rzhk479br3zj",
        accessToken:"c648b6025ca40946db5d58a7e45de4b1d023dd6a93ba41655e612c00612c0689"
      }
    },
      `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vartiovuoren Pojat`,
        short_name: `varpo.fi`,
        start_url: `/`,
        background_color: `#6e0000`,
        theme_color: `#6e0000`,
        display: `minimal-ui`,
        icon: `src/images/varpo_tunnus-color-transparent.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
