import React from 'react'
import './styles.css'

const Navbar = ({ light }) => (
  <div className={`navbar-wrapper ${light && 'navbar-wrapper-on'}`}>
    {light && (
      <nav>
        <a href="https://www.linkedin.com/in/ryanrundle/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/rrundle" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* <a href="/#">Resume</a> */}
        <a href="mailto:ryan@ryanrundle.com" target="_blank" rel="noopener noreferrer">Contact</a>
      </nav>
    )}
  </div>
)

export default Navbar;
