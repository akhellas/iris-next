import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import About from './About'
import Documents from '../documents/Documents'
import Tasks from '../tasks/Tasks'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/documents" component={Documents} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
)

export default Main
