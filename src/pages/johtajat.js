import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const Johtaja = ({node})=>{
  return (
    <li>
      <Link to={"johtajat/"+node.name}>{node.name}</Link>
    </li>
  )
}
const Johtajat = ({data}) => (
  <Layout>
    <SEO title="johtajat" />
    <ul>{data.allContentfulJohtaja.edges.map((edge)=><Johtaja node={edge.node}/>)}</ul>
  </Layout>
)

export default Johtajat

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
