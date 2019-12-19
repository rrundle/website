import React, { useState } from 'react'
import './styles.css'

const Navbar = ({ light }) => {
  const [clickedLink, setClickedLink] = useState('')

  return (
    <div className={`navbar-wrapper ${light && 'navbar-wrapper-on'}`}>
      {light && (
        <nav>
          <a href="https://github.com/rrundle" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://github.com/rrundle" target="_blank" rel="noopener noreferrer">Projects</a>
          <a href="/#">Resume</a>
          <a href="mailto:ryan@ryanrundle.com" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
      )}
    </div>
  )
}

export default Navbar;
