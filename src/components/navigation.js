import React from 'react'
import Link from 'gatsby-link'
import navigationStyles from "./navigation.css";
import { useStaticQuery, graphql } from "gatsby"

import '../components/footer.css'

const Navigation = (props) => {
  const data = useStaticQuery(graphql`
        query NavigationQuery {
            contentfulNavigation {
              title
              links{
                ... on ContentfulPage {
                    slug
                    title
                  }
              }
            }
          }
          
        `)
          const nav = data.contentfulNavigation;
  return (
    <nav>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#520F9D" fill-opacity="1" d="M0,128L21.8,160C43.6,192,87,256,131,245.3C174.5,235,218,149,262,96C305.5,43,349,21,393,48C436.4,75,480,149,524,154.7C567.3,160,611,96,655,80C698.2,64,742,96,785,144C829.1,192,873,256,916,245.3C960,235,1004,149,1047,122.7C1090.9,96,1135,128,1178,122.7C1221.8,117,1265,75,1309,64C1352.7,53,1396,75,1418,85.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg> */}
        <ul>
       {nav&&nav.links.map(p=>(
           p.slug==="/"?
           <Link key={p.slug}  to={p.slug}><li>{nav&&nav.title}</li></Link>:
           <Link key={p.slug} to={p.slug}><li>{p.title}</li></Link>
       ))}
       </ul>
       
    </nav>
  )
}

export default Navigation
