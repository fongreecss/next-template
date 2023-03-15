migrate((db) => {
  const collection = new Collection({
    "id": "xrhzbwmr45pt34d",
    "created": "2023-03-15 16:24:54.776Z",
    "updated": "2023-03-15 16:24:54.776Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pue05i7n",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "hxzxgkqn",
        "name": "message",
        "type": "editor",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("xrhzbwmr45pt34d");

  return dao.deleteCollection(collection);
})
