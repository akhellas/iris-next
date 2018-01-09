import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from '../core/NotFound'
import DocumentsDashboard from './DocumentsDashboard'
import CreateDocument from './CreateDocument'

const Documents = () => (
  <div className="is-fullheight">
    {/* <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </nav> */}
    <Switch>
      <Route exact path="/documents" component={DocumentsDashboard} />
      <Route exact path="/documents/new" component={CreateDocument} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default Documents
