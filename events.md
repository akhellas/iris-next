## IRIS Document Creation/Editing Events

- [Document Created] (#document-created)
- [Document Details Updated] (#document-details-updated)
- [Document Reference Added] (#document-reference-added)

### Document Created

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

### Document Details Updated

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

### Document Reference Added

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