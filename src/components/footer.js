import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const Footer = ({ data }) => (
    <div id="footer" className="footer">
        {/* <img className="header_img" src={data.allContentfulAsset.nodes[0].file.url}></img> */}
    </div>
)

export default Footer

// export const pageQuery = graphql`
// query getFooterImage {
//   allContentfulAsset(filter: {title: {eq: "footer"}}) {
//     nodes {
//       title
//       file {
//         url
//       }
//     }
//   }
// }`


