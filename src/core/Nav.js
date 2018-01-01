import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
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
          <div className="navbar-start">
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
          </div>
          <div className="navbar-item is-expanded" />
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
