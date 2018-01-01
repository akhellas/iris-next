import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './core/Nav'
import Sidenav from './core/Sidenav'
import Main from './core/Main'
import Footer from './core/Footer'

const menu = {
  documents: {
    caption: 'Documents',
    path: '/documents',
    sections: [
      {
        caption: 'Create',
        items: [
          {
            caption: 'New',
            icon: 'fa fa-file-text',
            path: '/documents/new'
          },
          {
            caption: 'Insert',
            icon: 'fa fa-upload',
            path: '/documents/insert'
          },
          {
            caption: 'Clone',
            path: '/documents/clone'
          }
        ]
      },
      {
        caption: 'Inbox',
        items: [
          {
            caption: 'Action',
            path: '/documents/inbox/action'
          },
          {
            caption: 'Info',
            path: '/documents/inbox/info'
          }
        ]
      }
    ]
  },
  tasks: {
    caption: 'Tasks',
    path: '/tasks',
    sections: [
      {
        caption: 'task grp',
        path: '/tasks/new',
        items: []
      }
    ]
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
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
