import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'

import Nav from './core/Nav'
import Main from './core/Main'

const App = () => (
  <div>
    <Nav />
    <Main />
  </div>
)

export default withRouter(connect()(App))
