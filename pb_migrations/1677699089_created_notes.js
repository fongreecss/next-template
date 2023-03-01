migrate((db) => {
  const collection = new Collection({
    "id": "vr4iouz1ajag826",
    "created": "2023-03-01 19:31:29.146Z",
    "updated": "2023-03-01 19:31:29.146Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ndy4gjas",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "j423tiyw",
        "name": "text",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vr4iouz1ajag826");

  return dao.deleteCollection(collection);
})
