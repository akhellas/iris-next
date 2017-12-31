import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => (
  <aside className="menu">
    <p className="menu-label">Create</p>
    <ul className="menu-list">
      <li>
        {' '}
        <NavLink activeClassName="is-active" to="/documents/new" exact={true}>
          New
        </NavLink>
      </li>
    </ul>
  </aside>
)

export default Sidenav
