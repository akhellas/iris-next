import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className='navbar is-dark'>
        <div className='navbar-brand'>
          <a className='navbar-item'>
            <span className='icon'>
              <i className='fa fa-bars'></i>
            </span>
          </a>
          <NavLink className='navbar-item' activeClassName='is-active' to='/' exact={true}>IRIS</NavLink>
          <NavLink className='navbar-item' activeClassName='is-active' to='/about' exact={true}>About</NavLink>
        </div>
      </nav>
    )
  }
}

export default Nav