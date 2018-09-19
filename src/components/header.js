import React from 'react'
import { Link } from 'gatsby'


const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
    <Link to="/Hello">Hello</Link>
    <Link to="/About">About</Link>
    <Link to="/Lab">Lab</Link>
    <Link to="/Contact">Contact</Link>
  
  </div>
  
</div>
)

export default Header
