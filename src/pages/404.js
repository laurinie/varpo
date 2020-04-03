import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from "gatsby"
import NonStretchedImage from "../components/NonStretchedImage";
import Layout from "../layouts/index";
import pageStyles from "./page.module.css";
import Link from 'gatsby-link'
import Highlighted from "../components/higlighted";

const notFound = (props) => {
  const renderBlock = (block) => {
    if (block.title !== "empty") {
      return (
        <div className={pageStyles.indexblock}>
          <Link to={`/${block.slug}`} state={{from:post.slug}}>
            <div className={pageStyles.link}>
              <h1>{block.title}</h1>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /><path d="M0 0h24v24H0V0z" fill="none" /></svg>
            </div>
          </Link>
        </div>
      )
    }
  }
  const post = get(props, 'data.contentfulPage')
  return (
    <Layout>
      <div className={pageStyles.cover}>
        <NonStretchedImage className={pageStyles.coverImage} objectFit={"contain"} fluid={post.coverImage.fluid} />
        <Highlighted highlighted={post.highlighted}/>
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


export default notFound

export const pageQuery = graphql`
query ErrorPage {
    contentfulPage(slug: {eq: "404"}) {
      slug
      title
      coverImage {
        fluid(quality: 100) {
          src
        }
      }
      highlighted
      blocks {
        ... on ContentfulPage {
          slug
          title
        }
      }
    }
  }
`
