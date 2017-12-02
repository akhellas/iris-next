import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Documents from '../documents/Documents'
import About from '../core/About'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Documents} />
            <Route exact path='/about' component={About} />
        </Switch>
    </main>
)

export default Main