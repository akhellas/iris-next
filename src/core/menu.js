const documentsMenu = {
  name: 'Έγγραφα',
  url: '/documents',
  items: [
    {
      name: 'ΔΗΜΙΟΥΡΓΙΑ',
      // icon: 'fa fa-file-text fa-lg',
      items: [
        { name: 'Νέο Έγγραφο', icon: 'fa fa-file-text', url: '/documents/new' },
        { name: 'Εισαγωγή', icon: 'fa fa-upload', url: '/documents/insert' },
        { name: 'Πρόχειρα', icon: 'fa fa-folder', url: '/documents/drafts' }
      ]
    },
    {
      name: 'ΕΙΣΕΡΧΟΜΕΝΑ',
      // icon: 'fa fa-inbox fa-lg',
      items: [
        { name: 'Για Ενέργεια', icon: 'fa fa-inbox', url: '/documents/inbox/action' },
        { name: 'Για Ενημέρωση', icon: 'fa fa-info-circle', url: '/documents/inbox/info' }
      ]
    },
    {
      name: 'ΕΞΕΡΧΟΜΕΝΑ',
      // icon: 'fa fa-paper-plane fa-lg',
      items: [
        { name: 'Για Υπογραφή', icon: 'fa fa-pencil', url: '/documents/outbox/pending' },
        { name: 'Σε Εξέλιξη', icon: 'fa fa-hourglass', url: '/documents/outbox/inprogress' },
        { name: 'Για Διανομή', icon: 'fa fa-paper-plane', url: '/documents/outbox/distribution' }
      ]
    },
    {
      name: 'ΑΡΧΕΙΟ',
      //icon: 'fa fa-archive fa-lg',
      items: [
        { name: 'Εισερχόμενα', icon: 'fa fa-envelope', url: '/documents/archive/inbox' },
        { name: 'Εξερχόμενα', icon: 'fa fa-archive', url: '/documents/archive/outbox' },
        { name: 'Από Εργασίες', icon: 'fa fa-tasks', url: '/documents/archive/tasks' },
        { name: 'Αναζήτηση', icon: 'fa fa-search', url: '/documents/archive/search' }
      ]
    },
    {
      name: 'ΔΙΑΦΟΡΑ',
      items: [
        { name: 'Πρωτόκολλο', icon: 'fa fa-book', url: '/documents/registry' },
        { name: 'Βιβλιοθήκη', icon: 'fa fa-university', url: '/documents/library' }
      ]
    }
  ]
}

const tasksMenu = {
  name: 'Εργασίες',
  url: '/tasks',
  items: [
    {
      name: 'ΔΗΜΙΟΥΡΓΙΑ',
      items: [
        { name: 'Νέα Εργασία', icon: 'fa fa-file-text', url: '/tasks/new' }
      ]
    },
    {
      name: 'ΕΚΚΡΕΜΟΤΗΤΕΣ',
      items: [
        { name: 'Εισερχόμενες', icon: 'fa fa-exclamation-circle', url: '/tasks/pending/inbox' },
        { name: 'Εξερχόμενες', icon: 'fa fa-tasks', url: '/tasks/pending/outbox' }
      ]
    },
    {
      name: 'ΟΛΟΚΛΗΡΩΜΕΝΕΣ',
      items: [
        { name: 'Εισερχόμενες', icon: 'fa fa-inbox', url: '/tasks/complete/inbox' },
        { name: 'Εξερχόμενες', icon: 'fa fa-archive', url: '/tasks/complete/outbox' }
      ]
    },
    {
      name: 'ΓΙΑ ΕΝΗΜΕΡΩΣΗ',
      items: [
        { name: 'Εισερχόμενες', icon: 'fa fa-info-circle', url: '/tasks/info/inbox' },
        { name: 'Εξερχόμενες', icon: 'fa fa-share', url: '/tasks/info/outbox' }
      ]
    }
  ]
}

const issuesMenu = {
  name: 'Θέματα',
  url: '/issues',
  items: [
    {
      name: 'ΔΗΜΙΟΥΡΓΙΑ',
      items: [
        { name: 'Νέο Θέμα', icon: 'fa fa-file-text', url: '/issues/new' }
      ]
    },
    {
      name: 'ΑΝΑ ΚΑΤΑΣΤΑΣΗ',
      items: [
        { name: 'Μη Αναγνωσμένα', icon: 'fa fa-flag', url: '/issues/unread' },
        { name: 'Σε Εξέλιξη', icon: 'fa fa-hourglass', url: '/issues/pending' },
        { name: 'Ληξιπρόθεσμα', icon: 'fa fa-exclamation-circle', url: '/issues/delayed' },
        { name: 'Ολοκληρωμένα', icon: 'fa fa-archive', url: '/issues/complete' }
      ]
    }
  ]
}

const menu = {
  items: [
    documentsMenu,
    tasksMenu,
    issuesMenu
  ]
}

export default menu
