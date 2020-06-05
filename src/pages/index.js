import React from 'react'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";
import pageStyles from "./page.module.css";
import Link from 'gatsby-link'
import SEO from "../components/SEO";
import Highlighted from "../components/higlighted"
import { Arrow } from "../components/svgs";

const RootIndex = (props) => {
  const renderBlock = (block, from) => {
    if (block.title !== "empty") {
      if (block.slug) {
        return (
          <Link
            to={`/${block.slug}`}
            state={{ from: from }}
            className={pageStyles.indexblock}
            key={block.slug}
          >
            <div className={pageStyles.link}>
              <h1>{block.title}</h1>
              <Arrow />
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
          <div className={pageStyles.block} key={block.title} >
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
  const post = get(props, 'data.contentfulPage')
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.descriptionToLink}
        pathname={post.slug}
        article={false}
        banner={post.coverImage && post.coverImage.file.src}
      />
      <div className={pageStyles.cover}>
        <NonStretchedImage className={pageStyles.coverImage} objectFit={"contain"} fluid={post.coverImage.fluid} file={post.coverImage.file} />
        <Highlighted highlighted={post.highlighted} />
      </div>
      <div className="wrapper">
        <h1 className="section-headline">{post.title}</h1>
        <div
          className={pageStyles.blocks}
        >
          {post.blocks.map(block => (
            renderBlock(block, post.slug)
          ))}
        </div>
      </div>
    </Layout>
  )
}


export default RootIndex

export const pageQuery = graphql`
  query FrontPage{
    contentfulPage(slug: {eq: "/"}) {
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
      blocks {
        ... on ContentfulBlock {
          title
          maxWidth
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulPage {
        title
        maxWidth
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
