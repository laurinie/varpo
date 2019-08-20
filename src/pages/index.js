import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';
import PostShape from "../components/postShape";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slice from "../components/slice";
// }
const IndexPage = ({ data }) => {
  let frontPageInfo = {};
  data.allContentfulOtsikkoJaTeksti.nodes.map(n=>{
    console.log(n);
    if(n.contentfulid ==="etusivun_info"){
      console.log(n);
      frontPageInfo = n;
    }
  })
  const frontPageContent = data.allContentfulEtusivu.edges[0].node.frontpageContent.frontpageContent;
  const headerImg = data.allContentfulAsset.nodes[0].file.url;
  return (
    <Layout>
    <SEO title="Varpo" />
    <div>
    <h1 className="cover_h1">Vartiovuoren Pojat</h1>
      <img className="header_img" src={headerImg}></img>
      
      {/* <PostShape /> */}
      <Slice content = {frontPageInfo}/>
    </div>
    
    {/* < ReactMarkdown className="content" source={frontPageContent} /> */}
  </Layout>
  )
}
 


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
  allContentfulOtsikkoJaTeksti {
    nodes {
      title
      textBody {
        textBody
      }
      contentfulid
    }
  }
}`
