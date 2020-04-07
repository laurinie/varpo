import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";
import Link from 'gatsby-link'
import pageStyles from "../pages/page.module.css";
import SEO from "../components/SEO";

class PageTemplate extends React.Component {
  renderBlock(block) {
    if (block.title !== "empty") {
      return (
        <div className={pageStyles.block} key={block.title}>
          <h1>{block.title}</h1>
          <div
            className={pageStyles.block}
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
        <SEO
        title={post.title}
        description={post.description.childMarkdownRemark.html}
        pathname={post.slug}
        article={true}
        // banner={post.coverImage && post.coverImage.fluid && post.coverImage.fluid.src}
      />
        <div>
          {/* <Helmet title={post.title} /> */}
          <div className={pageStyles.cover}>
            {post.highlighted && <h2 className={pageStyles.highlighted}>{post.highlighted}</h2>}
            {post.coverImage&&<NonStretchedImage className={pageStyles.coverImage} objectFit={"cover"} fluid={post.coverImage.fluid} />}
          </div>
          <div className="wrapper">
            <Link to={"/"} className={pageStyles.back}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /><path d="M0 0h24v24H0V0z" fill="none" /></svg>Etusivulle</Link>
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
    highlighted
    description{
      childMarkdownRemark {
      html
    }}
    blocks {
      ... on ContentfulBlock {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      }
    }
  }
}
`
