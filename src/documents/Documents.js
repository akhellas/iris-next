import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DocumentsDashboard from './DocumentsDashboard'
import CreateDocument from './CreateDocument'

const Documents = () => (
  <div>
    <h2>Documents</h2>
    <Switch>
      <Route exact path="/documents" component={DocumentsDashboard} />
      <Route exact path="/documents/new" component={CreateDocument} />
    </Switch>
  </div>
)

export default Documents
