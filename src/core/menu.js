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
            icon: null,
            path: '/documents/inbox/action'
          },
          {
            caption: 'Info',
            icon: null,
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

export default menu
