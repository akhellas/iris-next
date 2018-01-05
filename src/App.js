import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './core/Nav'
import Sidenav from './core/Sidenav'
import Main from './core/Main'
import Footer from './core/Footer'

import menu from './core/menu'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { feature: this.getFeature(props) }
  }

  getFeature(props) {
    const url = '/' + props.location.pathname.split('/')[1]
    const feature = menu.items.find(item => item.url === url)
    return feature
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      feature: this.getFeature(nextProps)
    })
  }

  render() {
    const feature = this.state.feature
    return (
      <div className="container-fluid is-fullheight">
        <Nav />
        <div className="columns is-marginless is-fullheight">
          {feature &&
            feature.items &&
            feature.items.length > 0 && (
              <div className="column is-narrow Sidenav">
                <Sidenav feature={feature} />
              </div>
            )}
          <div className="column is-paddingless">
            <Main />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect()(App))
