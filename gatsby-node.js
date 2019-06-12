const path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        const johtajaTemplate = path.resolve("src/templates/johtajaTemplate.js")
        resolve(
            graphql(
                `{
                    allContentfulJohtaja(limit:100){
                        edges{
                            node{
                                name
                            }
                        }
                    }
                }`
            ).then((result) => {
                console.log(result);
                if (result.errors) { reject(result.errors) }
                result.data.allContentfulJohtaja.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.name,
                        component:johtajaTemplate,
                        context:{
                            name:edge.node.name,
                        }
                    })
                })
                return
            })
        )
    })
}
