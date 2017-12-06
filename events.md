## IRIS Document Creation/Editing Events

- [Document Created](#documentcreated)
- [Document Details Updated](#documentdetailsupdated)
- [Document Reference Added](#documentreferenceadded)

### DocumentCreated

```json
{
    "id": "guid",
    "type": "documentCreated",
    "timestamp": "datetime",
    "user": {
        "id": "user_id",
        "department": "department_id",
        "title": "title_id",
        "name": "fullname"
    },
    "document": {
        "id": "document_id",
        "version": 0
    }
}
```

### DocumentDetailsUpdated

```json
{
    "id": "guid",
    "type": "documentDetailsUpdated",
    "timestamp": "datetime",
    "user": {
        "id": "user_id",
        "department": "department_id",
        "title": "title_id",
        "name": "fullname"
    },
    "document": {
        "id": "document_id",
        "version": 1
    },
    "details": {
        "type": "",
        "folder": "",
        "priority": "",
        "classification": "",
        "subject": "",
        "remarks": ""
    }
}
```

### DocumentReferenceAdded

```json
{
    "id": "guid",
    "type": "documentReferenceAdded",
    "timestamp": "datetime",
    "user": {
        "id": "user_id",
        "department": "department_id",
        "title": "title_id",
        "name": "fullname"
    },
    "document": {
        "id": "document_id",
        "version": 2
    },
    "reference": {
        "id": "",
        "type": "",
        "name": ""
    }
}
```

### DocumentReferenceRemoved

### DocumentAttachmentAdded

### DocumentAttachmentUpdated

### DocumentAttachmentRemoved

### DocumentApprovalNodeAdded

### DocumentApprovalNodeUpdated

### DocumentApprovalNodeRemoved

### DocumentDistributionNodeAdded

### DocumentDistributionNodeRemoved

### DocumentDistributionTableAdded

### DocumentDistributionTableRemoved


## IRIS Document Approval Events

### DocumentAccepted

### DocumentRejected


## IRIS Document Registration/Distribution Events


### DocumentRegistered

### DocumentDistributed

### DocumentReceived