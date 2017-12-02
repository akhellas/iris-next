import Documents from '../documents/Documents'
import CreateDocument from '../documents/CreateDocument'

import Tasks from '../tasks/Tasks'

const routes = [
  {
    path: '/documents',
    component: Documents,
    routes: [
      {
        path: '/documents/new',
        component: CreateDocument
      }
    ]
  },
  {
    path: '/tasks',
    component: Tasks
  }
]

export default routes