import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Johtaja = ({ node }) => {
  return (

    <Link to={"johtajat/" + node.name} className="johtajaCard">
      <img src={node.picture.file.url} />
      <h3>{node.name}</h3>
      <p>{node.shortDescription}</p>
    </Link>

  )
}
const Johtajat = ({ data }) => (
  <Layout>
    <SEO title="johtajat" />
    <div className="background">

      {/* <img src={data.allContentfulAsset.nodes[0].file.url} /> */}
    </div>
    <div className="cards">{data.allContentfulJohtaja.nodes.map((node) => <Johtaja node={node} />)}</div>
  </Layout>
)

export default Johtajat

export const pageQuery = graphql`
query pageQuery {
  allContentfulJohtaja {
    nodes {
      name
      picture {
        file {
          url
        }
      }
      shortDescription
    }
  }
  allContentfulAsset(filter: {title: {eq: "johtajatSivunTausta"}}) {
    nodes {
      title
      file {
        url
      }
    }
  }
}`
