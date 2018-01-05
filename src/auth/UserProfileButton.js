import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom'

import SignInButton from './SignInButton'

class UserProfileButton extends Component {
  constructor(props) {
    super(props)
    this.state = { user: props.user }
  }

  render() {
    if (!this.state.user) {
      return <SignInButton />
    }
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <span className="icon">
            <i className="fa fa-user" />
          </span>
          {this.state.user.email}
        </a>

        <div className="navbar-dropdown is-right">
          <a className="navbar-item">Overview</a>
          <a className="navbar-item">Elements</a>
          <a className="navbar-item">Components</a>
          <hr className="navbar-divider" />
          <div className="navbar-item">Version 0.6.1</div>
        </div>
      </div>
    )
  }
}

export default UserProfileButton
