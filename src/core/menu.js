const documentsMenu = {
  name: 'Έγγραφα',
  url: '/documents',
  items: [
    {
      name: 'ΔΗΜΙΟΥΡΓΙΑ',
      items: [
        { name: 'Νέο Έγγραφο', url: '/documents/new' },
        { name: 'Εισαγωγή', url: '/documents/insert' },
        { name: 'Πρόχειρα', url: '/documents/drafts' }
      ]
    },
    {
      name: 'ΕΙΣΕΡΧΟΜΕΝΑ',
      items: [
        { name: 'Για Ενέργεια', url: '/documents/inbox/action' },
        { name: 'Για Ενημέρωση', url: '/documents/inbox/info' }
      ]
    },
    {
      name: 'ΕΞΕΡΧΟΜΕΝΑ',
      items: [
        { name: 'Για Υπογραφή', url: '/documents/outbox/pending' },
        { name: 'Σε Εξέλιξη', url: '/documents/outbox/inprogress' },
        { name: 'Για Διανομή', url: '/documents/outbox/distribution' }
      ]
    },
    {
      name: 'ΑΡΧΕΙΟ',
      items: [
        { name: 'Εισερχόμενα', url: '/documents/archive/inbox' },
        { name: 'Εξερχόμενα', url: '/documents/archive/outbox' },
        { name: 'Από Εργασίες', url: '/documents/archive/tasks' },
        { name: 'Αναζήτηση', url: '/documents/archive/search' }
      ]
    },
    {
      name: 'ΔΙΑΦΟΡΑ',
      items: [
        { name: 'Πρωτόκολλο', url: '/documents/registry' },
        { name: 'Βιβλιοθήκη', url: '/documents/library' }
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
        { name: 'Νέα Εργασία', url: '/tasks/new' }
      ]
    },
    {
      name: 'ΕΚΚΡΕΜΟΤΗΤΕΣ',
      items: [
        { name: 'Εισερχόμενες', url: '/tasks/pending/inbox' },
        { name: 'Εξερχόμενες', url: '/tasks/pending/outbox' }
      ]
    },
    {
      name: 'ΟΛΟΚΛΗΡΩΜΕΝΕΣ',
      items: [
        { name: 'Εισερχόμενες', url: '/tasks/complete/inbox' },
        { name: 'Εξερχόμενες', url: '/tasks/complete/outbox' }
      ]
    },
    {
      name: 'ΓΙΑ ΕΝΗΜΕΡΩΣΗ',
      items: [
        { name: 'Εισερχόμενες', url: '/tasks/info/inbox' },
        { name: 'Εξερχόμενες', url: '/tasks/info/outbox' }
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
        { name: 'Νέο Θέμα', url: '/issues/new' }
      ]
    },
    {
      name: 'ΑΝΑ ΚΑΤΑΣΤΑΣΗ',
      items: [
        { name: 'Μη Αναγνωσμένα', url: '/issues/unread' },
        { name: 'Σε Εξέλιξη', url: '/issues/pending' },
        { name: 'Ληξιπρόθεσμα', url: '/issues/delayed' },
        { name: 'Ολοκληρωμένα', url: '/issues/complete' }
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
