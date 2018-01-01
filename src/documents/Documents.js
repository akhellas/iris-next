import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from '../core/NotFound'
import DocumentsDashboard from './DocumentsDashboard'
import CreateDocument from './CreateDocument'

const Documents = () => (
  <div className="is-fullheight">
    <Switch>
      <Route exact path="/documents" component={DocumentsDashboard} />
      <Route exact path="/documents/new" component={CreateDocument} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default Documents
