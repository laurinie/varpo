import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

import get from 'lodash/get'
import { graphql } from "gatsby"

class Navigation extends React.Component {
  renderLink(page) {
    if (page.slug!== "varpo") {
      return (
        <li className={styles.navigationItem}>
            <Link to={`/${page.slug}`}>{page.title}</Link>
        </li>
      )
    }
  }
  render() {
    // const post = get(this.props, 'data.allContentfulPage')
    console.log(this.props);
    return (
      <nav role="navigation">
        <ul className={styles.navigation}>
          {/* {post.nodes.map(page=>this.renderLink(page))} */}
        </ul>
      </nav>
    )
  }
}

export default Navigation

// export const pageQuery = graphql`
//   query NavigationQuery{
//     allContentfulPage {
//       nodes {
//         title
//         slug
//       }
//     }
//   }
// `

