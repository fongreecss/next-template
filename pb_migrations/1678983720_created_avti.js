migrate((db) => {
  const collection = new Collection({
    "id": "ohw4swglezp315e",
    "created": "2023-03-16 16:22:00.289Z",
    "updated": "2023-03-16 16:22:00.289Z",
    "name": "avti",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ltccwkmf",
        "name": "ime",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ohw4swglezp315e");

  return dao.deleteCollection(collection);
})
