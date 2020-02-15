import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './page.module.css'
import ArticlePreview from '../components/article-preview'

class PageIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulPage.edges')

    return (
      <div style={{ background: '#00132b'}}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
          Sivut
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Sivut</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default PageIndex

export const pageQuery = graphql`
  query PageIndexQuery {
    allContentfulPage {
      edges {
        node {
          title
          slug
          text1 {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
