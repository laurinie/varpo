import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
const Menu = ({ links }) => (
    <div>
    <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        {links.map(l=>(<Link key={l.url} to={l.url}>{l.name}</Link>))}
    </div>
    <span onClick={openNav}>&#9776; Valikko</span>
    </div>
    // <div id="side"{{

    // }}>
    //   v
    //     <li><Link to={l.url}>{l.name}</Link></li>
    //   ))}
    // </ul>

)

export default Menu


