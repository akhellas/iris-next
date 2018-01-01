import React from 'react'
import { NavLink } from 'react-router-dom'

class Sidenav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { feature: props.feature }
  }
  render() {
    if (!this.props.feature || !this.props.feature.sections) {
      return null
    }
    const items = this.props.feature.sections.map((section, index) => (
      <React.Fragment key={index}>
        <p className="menu-label">{section.caption}</p>
        <ul className="menu-list">
          {section.items.map(item => (
            <NavLink
              key={item.path}
              activeClassName="is-active"
              to={item.path}
              exact={true}>
              {item.icon ? (
                <span className="icon">
                  <i className={item.icon} />
                </span>
              ) : null}
              {item.caption}
            </NavLink>
          ))}
        </ul>
      </React.Fragment>
    ))
    return <aside className="menu">{items}</aside>
  }
}

export default Sidenav
