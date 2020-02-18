import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";
import '../components/hero.module.css'

const RootIndex= (props)=>{
  const renderBlock=(block)=> {
    if (block.title !== "empty") {
      return (
        <div>
          <h1>{block.title}</h1>
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
    return (
      <Layout>
          <Helmet title={`Vartiovuoren Pojat`} />
          <div className="hero">
            <NonStretchedImage className="heroImage" fluid={post.coverImage.fluid} />
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
      blocks {
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
