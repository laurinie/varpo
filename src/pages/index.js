import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';
import PostShape from "../components/postShape";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slice from "../components/slice";
// }
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Varpo" />
    <div>
    <h1 className="cover_h1">Vartiovuoren Pojat</h1>
      <img className="header_img" src={data.allContentfulAsset.nodes[0].file.url}></img>
      
      {/* <PostShape /> */}
      <Slice/>
    </div>
    
    < ReactMarkdown className="content" source={data.allContentfulEtusivu.edges[0].node.frontpageContent.frontpageContent} />
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
  allContentfulAsset(filter: {title: {eq: "header"}}) {
    nodes {
      title
      file {
        url
      }
    }
  }
}`
