import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './article-preview.module.css'
export default ({ article }) => (
  <div className={styles.preview} >
    <Img alt="" sizes={article.coverImage.sizes} />
    <h3 className={styles.previewTitle}>
      <Link to={`/${article.slug}`}>{article.title}</Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: article.text1.childMarkdownRemark.html,
      }}
    />
  </div>
)
