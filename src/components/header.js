import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu";
import VarpoLogo from "../images/varpo_tunnus-color-transparent.png";
const Header = ({ siteTitle, links }) => (
  <header
    className="header"
  >
    
    <div className="nav_bar">

      <h2>
        <Link to="/">
          {siteTitle}
        </Link>
      </h2>
      <Menu links={links} />
      <img className="logo" src={VarpoLogo}></img>
    </div>
    <div className="nav_background" />

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
