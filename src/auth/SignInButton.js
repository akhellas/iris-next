import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignInButton extends Component {
  constructor(props) {
    super(props)
    this.state = { user: props.user }
  }

  render() {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <span className="icon">
            <i className="fa fa-user" />
          </span>
        </a>
        <div className="navbar-dropdown is-right">
          <Link className="navbar-item" to="/login">
            <span className="icon">
              <i className="fa fa-sign-in" />
            </span>
            Sign In
          </Link>
        </div>
      </div>
    )
  }
}

export default SignInButton
