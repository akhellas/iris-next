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
    const name = props.location.pathname.split('/')[1]
    const feature = menu[name]
    this.state = { feature: feature }
  }

  componentWillReceiveProps(nextProps) {
    const name = nextProps.location.pathname.split('/')[1]
    const feature = menu[name]
    this.setState({
      feature: feature
    })
  }

  render() {
    const feature = this.state.feature
    return (
      <div className="container-fluid is-marginless App">
        <Nav />
        <div className="columns is-marginless AppColumns">
          <div className="column is-narrow Sidenav">
            <Sidenav feature={feature} />
          </div>
          <div className="column">
            <Main />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect()(App))
