import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './core/Nav'
import Sidenav from './core/Sidenav'
import Main from './core/Main'
import Footer from './core/Footer'

const App = () => (
  <div className="container-fluid is-marginless App">
    <Nav />
    <div className="columns is-marginless AppColumns">
      <div className="column is-narrow Sidenav">
        <Sidenav />
      </div>
      <div className="column">
        <Main />
      </div>
    </div>
    <Footer />
  </div>
)

export default withRouter(connect()(App))
