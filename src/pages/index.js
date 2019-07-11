import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';

import Layout from "../components/layout"
import SEO from "../components/seo"
// }
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Varpo" />
    <div>
      <iframe
        src="https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fvartiovuoren.pojat&amp;colorscheme=light&amp;show_faces=false&amp;stream=true&amp;header=false&amp;height=475&amp;width=900"
        scrolling="no"
        style={{height:475,width:"100%",maxWidth:510}}
        allowtransparency="true">
      </iframe>
      < ReactMarkdown source={data.allContentfulEtusivu.edges[0].node.frontpageContent.frontpageContent} />
      <iframe src="https://snapwidget.com/embed/336987"  
      allowtransparency="true" 
      scrolling="no" 
      style={{height:220,lineHeight:0,width:"100%"}}></iframe>
    </div>
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
