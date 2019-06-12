import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const Johtaja = ({node})=>{
  return (
    <li>
      <Link to={node.name}>{node.name}</Link>
    </li>
  )
}
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ul>{data.allContentfulJohtaja.edges.map((edge)=><Johtaja node={edge.node}/>)}</ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query pageQuery{
  allContentfulJohtaja(filter:{
    node_locale:{eq:"fi-FI"}
  }){
    edges{
      node{
        name
      }
    }
  }
}`
