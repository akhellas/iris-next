import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import menu from './menu'

import UserProfileButton from '../auth/UserProfileButton'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { menu: menu }
  }
  render() {
    const features = menu.items.map(feature => (
      <NavLink
        key={feature.url}
        className="navbar-item"
        activeClassName="is-active"
        to={feature.url}>
        {feature.name}
      </NavLink>
    ))

    return (
      <nav className="navbar is-link is-fixed-top Nav">
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/"
            exact={true}>
            <span className="icon">
              <i className="fa fa-tint" />
            </span>
            IRIS
          </NavLink>
          <button className="button navbar-burger is-link">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-item is-expanded" />
          <div className="navbar-start">{features}</div>
          <div className="navbar-item is-expanded" />
          <div className="navbar-end">
            <UserProfileButton />
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
