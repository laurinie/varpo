import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import heroStyles from '../components/hero.module.css'

class RootIndex extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPage')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Img className={heroStyles.coverImage} alt={post.title} sizes={post.coverImage.fixed.src} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {/* {post.publishDate} */}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content1.content.childMarkdownRemark.html,
            }}
          />
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
        content1 {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
        }
        coverImage {
          fixed {
            src
          }
        }
      }
  }
`
