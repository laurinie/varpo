import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';
import PostShape from "../components/postShape";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slice from "../components/slice";
import Article from "../components/article";
// }
const IndexPage = ({ data }) => {
  let frontPageInfo = {};
  let about = {};
  let action = {};
  data.allContentfulOtsikkoJaTeksti.nodes.map(n => {
    switch (n.contentfulid) {
      case "etusivun_info":
        frontPageInfo = n;
        break;
      case "tietoa_lippukunnasta":
        about = n;
        break;
      case "toiminta_varpossa":
        action = n;
        break;
      default:
        break;
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
        <Slice content={frontPageInfo} color="red" />
        <div className="home-content">
          <Article content={about} />
          <Article style="light-article" content={action} />
        </div>
        {/* {window.innerWidth < 750 ? */}
          <iframe
            src="https://snapwidget.com/embed/725690"
            class="snapwidget-widget"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
          ></iframe>
          {/* // : */}
        {/* //   <iframe */}
        {/* //     src="https://snapwidget.com/embed/725684"
        //     className="snapwidget-widget"
        //     allowtransparency="true"
        //     frameborder="0"
        //     scrolling="no"></iframe>
        // } */}
      </div>

      {/* < ReactMarkdown className="content" source={frontPageContent} /> */}
    </Layout >
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
