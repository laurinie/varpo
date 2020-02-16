import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
// import Img from 'gatsby-image'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";

import heroStyles from '../components/hero.module.css'

class RootIndex extends React.Component {
  renderBlock(block) {
    if (block.title !== "empty") {
      return (
        <div>
          <h1>{block.title}</h1>
          <div
            className={heroStyles.block}
            dangerouslySetInnerHTML={{
              __html: block.content.childMarkdownRemark.html,
            }}
          />
        </div>
      )
    }
  }
  render() {
    const post = get(this.props, 'data.contentfulPage')
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const blocks = [post.block1, post.block2, post.block3, post.block4];
    return (
      <div>
        <Helmet title={`Vartiovuoren Pojat`} />
        <div className={heroStyles.hero}>
          <NonStretchedImage className={heroStyles.heroImage} fluid={post.coverImage.fluid} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          {blocks.map(block => (
            this.renderBlock(block)
          ))}
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query FrontPage{
    contentfulPage(slug: {eq: "varpo"}) {
        slug
        title
        block1 {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        block2 {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        block3 {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        block4 {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        coverImage {
          fluid(quality: 100) {
src
          }
        }
      }
  }
`
