import React, { useState } from 'react'
import './styles.css'

const Navbar = ({ light }) => {
  const [clickedLink, setClickedLink] = useState('')

  return (
    <div className={`navbar-wrapper ${light && 'navbar-wrapper-on'}`}>
      {light && (
        <navbar>
          <a href="/#">About</a>
          <a href="/#">Projects</a>
          <a href="/#">Resume</a>
          <a href="/#">Contact</a>
        </navbar>
      )}
    </div>
  )
}

export default Navbar;
