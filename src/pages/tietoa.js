import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';

import Layout from "../components/layout"
import SEO from "../components/seo"
// }
const Tietoa = ({ data }) => (
    <Layout>
        <SEO title="tietoa" />
        <div>< ReactMarkdown source={data.allContentfulLippukunta.nodes[0].content.content} /></div>
    </Layout>
)

export default Tietoa

export const pageQuery = graphql`
query allLippukunta {
  allContentfulLippukunta {
    nodes {
        content {
          content
        }
        kuva {
          file {
            url
          }
        }
      }
    }
}`
