import React from 'react'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";
import Link from 'gatsby-link'
import pageStyles from "../pages/page.module.css";
import SEO from "../components/SEO";
import { Arrow } from "../components/svgs";

class PageTemplate extends React.Component {
  renderBlock(block,from) {
    if (block.title !== "empty") {
      if (block.slug) {
        return (
            <Link to={`/${block.slug}`} state={{ from: from }} className={pageStyles.indexblock} key={block.slug} style={block.widthInGrids&&{gridColumn:1+"/"+parseInt(block.widthInGrids+1)}}>
              <div className={pageStyles.link}>
                <h1>{block.title}</h1>
                <Arrow/>
              </div>
              <div
                className={pageStyles.linkblock}
                dangerouslySetInnerHTML={{
                  __html: block.description.childMarkdownRemark.html,
                }}
              />
              </Link>
        )
      } else {
        return (
          <div className={pageStyles.block} key={block.title} style={block.widthInGrids&&{gridColumn:1+"/"+parseInt(block.widthInGrids+1)}}>
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
  }
  render() {
    const post = get(this.props, 'data.contentfulPage')
    return (
      <Layout>
        <SEO
          title={post.title}
          description={post.descriptionToLink}
          pathname={post.slug}
          article={true}
          banner={post.coverImage && post.coverImage.file.src}
        />
        <div>
          <div className={pageStyles.cover}>
            {post.coverImage && <NonStretchedImage className={pageStyles.coverImage} objectFit={"cover"} fluid={post.coverImage.fluid} file={post.coverImage.file}/>}
            {post.highlighted && <h2 className={pageStyles.highlighted}>{post.highlighted}</h2>}
          </div>
          <div className="wrapper">
            <Link to={this.props.pathContext.from} className={pageStyles.back}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /><path d="M0 0h24v24H0V0z" fill="none" /></svg>Takaisin</Link>
            <div className={pageStyles.blocks} style={{ display: "grid", gridTemplateColumns: "repeat(" + post.gridSize + ",1fr)" }}>
              {post.blocks.map(block => (
                this.renderBlock(block, post.slug)
              ))}
            </div>
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
      file {
        contentType
        url
      }
      fluid(quality: 100) {
        src
      }
    }
    highlighted
    descriptionToLink
    description {
      childMarkdownRemark {
        html
      }
    }
    widthInGrids
    gridSize
    blocks {
      ... on ContentfulBlock {
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      ... on ContentfulPage {
        title
        description{
          childMarkdownRemark {
          html
        }
      }
        slug
        }
    }
  }
}

`
