import React from "react"
import { Link, graphql } from "gatsby"
import  ReactMarkdown from  'react-markdown';

import Layout from "../components/layout"
import SEO from "../components/seo"
// }
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>< ReactMarkdown source={data.allContentfulEtusivu.edges[0].node.frontpageContent.frontpageContent}/></div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allContentfulEtusivu {
    edges {
      node {
        frontpageContent {
          frontpageContent
        }
      }
    }
  }
}`
