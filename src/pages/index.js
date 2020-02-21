import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";
import heroStyles from '../components/hero.module.css';
import pageStyles from "./page.module.css";

const RootIndex = (props) => {
  const renderBlock = (block) => {
    if (block.title !== "empty") {
      return (
        <div className={pageStyles.block}>
          <h1>{block.title}</h1>
          {block.button&&<a href={block.button.link} style={{backgroundColor:block.button.color||"#fc030b"}} >{block.button.name}</a>}
          <div
            className="block"
            dangerouslySetInnerHTML={{
              __html: block.content.childMarkdownRemark.html,
            }}
          />
        </div>
      )
    }
  }
  const post = get(props, 'data.contentfulPage')
  // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
  console.log(post);
  return (
    <Layout>
      <Helmet title={`Vartiovuoren Pojat`} />
      <div className={heroStyles.hero}>
        <h2 className={pageStyles.highlighted}>{post.highlighted}</h2>
        <NonStretchedImage className={heroStyles.heroImage} fluid={post.coverImage.fluid} />
      </div>
      <div className="wrapper">
        <h1 className="section-headline">{post.title}</h1>
        {post.blocks.map(block => (
          renderBlock(block)
        ))}
      </div>
    </Layout>
  )
}


export default RootIndex

export const pageQuery = graphql`
  query FrontPage{
    contentfulPage(slug: {eq: "etusivu"}) {
      slug
      title
      coverImage {
        fluid(quality: 100) {
          src
        }
      }
      highlighted
      blocks {
        title
        content {
          childMarkdownRemark {
            html
          }
        }
        button{
          name
          link
          color
        }
      }
    }
  }
`
