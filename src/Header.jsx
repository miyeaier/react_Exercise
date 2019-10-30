import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='ui fixed invertedWhite menu'>
      <div className="ui container">
        <Link className="header item" to='/'>Brycology</Link>
        <div className="right menu">
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>About Me</NavLink>
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/projects'>Svamp<i class="tree icon"></i></NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Header 