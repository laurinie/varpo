import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Menu = ({ links }) => (
    <div id="sidenav" className="sidenav">
        {links.map(l=>(<Link key={l.url} to={l.url}>{l.name}</Link>))}
    </div>
)

export default Menu


