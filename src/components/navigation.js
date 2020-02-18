import React from 'react'
import Link from 'gatsby-link'
import './navigation.module.css'

import { useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery{
      allContentfulPage {
        nodes {
          title
          slug
        }
      }
    }
`)
  const renderLink = (page) => {
      return (
        <li>
          <Link to={`/${page.slug}`}>{page.title}</Link>
        </li>
      )
  }
  return (
    <nav role="navigation">
      <ul>
        {data.allContentfulPage.nodes.map(page => renderLink(page))}
      </ul>
    </nav>
  )
}


export default Navigation

