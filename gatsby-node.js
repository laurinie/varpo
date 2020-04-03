const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const page = path.resolve('./src/templates/page-template.js')
    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulPage.edges
        posts.forEach((post) => {
          if(post.node.slug !== "/" && post.node.slug !== "404"){
            createPage({
              path: `/${post.node.slug}/`,
              component: page,
              context: {
                slug: post.node.slug
              },
            })
          }
        })
      })
    )
  })
}