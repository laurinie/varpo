import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";

import heroStyles from '../components/hero.module.css'

class PageTemplate extends React.Component {
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
    return (
      <Layout>
        <div>
          <Helmet title={`${post.title} | Vartiovuoren Pojat`} />
          <div className={heroStyles.hero}>
            <NonStretchedImage className={heroStyles.heroImage} fluid={post.coverImage.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            {post.blocks.map(block => (
              this.renderBlock(block)
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
query PageBySlug($slug: String!) {
  contentfulPage(slug: {eq: $slug}) {
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
