import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar is-link is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item">
            <span className="icon">
              <i className="fa fa-bars" />
            </span>
          </a>
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/"
            exact={true}>
            IRIS
          </NavLink>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className="navbar-item is-expanded" />
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/documents">
              Documents
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/tasks">
              Tasks
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/issues">
              Issues
            </NavLink>
            <div className="navbar-item is-expanded" />
          </div>
          <div className="navbar-end">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
              exact={true}>
              About
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
