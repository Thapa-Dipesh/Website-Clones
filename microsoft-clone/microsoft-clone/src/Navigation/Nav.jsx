import React from 'react'
import  './Nav.css'

const Nav = () => {
  return (
    <>
      <div className="nav container">
        <div>
            <ul className="left">
                <a href="#"><img className='img' src="../src/assets/asset 1.png" alt="" /></a>
                <li><a href="#">Microsoft 365</a></li>
                <li><a href="#">Office</a></li>
                <li><a href="#">Copilot</a></li>
                <li><a href="#">Windows</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
        <div>
            <ul className="right">
                <li><a href="#">All Microsoft</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Sign in</a></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
