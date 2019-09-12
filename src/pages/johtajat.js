import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Johtaja = ({ node }) => {
  return (

    <Link to={"johtajat/" + node.name} className="johtajaCard" style={{
      backgroundImage: `url(${node.picture.file.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: 10,

    }}>
      {/* <img src={node.picture.file.url} /> */}
      <div className="imageShadow">
        <p className="reducedpadding">{node.shortDescription}</p>
        <h3 className="reducedpadding">{node.name}</h3>
      </div>
    </Link>

  )
}
const Johtajat = ({ data }) => (
  <Layout>
    <SEO title="johtajat" />
    {/* <div className="background"> */}

    {/* <img src={data.allContentfulAsset.nodes[0].file.url} /> */}
    {/* </div> */}
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
