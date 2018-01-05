import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import About from './About'
import SignIn from '../auth/SignIn'
import NotFound from './NotFound'
import Documents from '../documents/Documents'
import Tasks from '../tasks/Tasks'

const Main = () => (
  <main className="is-fullheight">
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/documents" component={Documents} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/about" component={About} />
      <Route exact path="/login" component={SignIn} />
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default Main
