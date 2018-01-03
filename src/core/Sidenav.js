import React from 'react'
import { NavLink } from 'react-router-dom'

class Sidenav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { feature: props.feature }
  }
  render() {
    if (!this.props.feature || !this.props.feature.items) {
      return null
    }
    const items = this.props.feature.items.map((section, index) => (
      <React.Fragment key={index}>
        <p className="menu-label">{section.name}</p>
        <ul className="menu-list">
          {section.items.map(item => (
            <NavLink
              key={item.url}
              activeClassName="is-active"
              to={item.url}
              exact={true}>
              {item.icon ? (
                <span className="icon">
                  <i className={item.icon} />
                </span>
              ) : null}
              {item.name}
            </NavLink>
          ))}
        </ul>
      </React.Fragment>
    ))
    return <aside className="menu">{items}</aside>
  }
}

export default Sidenav
