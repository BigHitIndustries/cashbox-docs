define({ "api": [
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "Logout user",
    "name": "LogoutUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/auth.py",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/status",
    "title": "Get User Status",
    "name": "StatusUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/auth.py",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/cashbox",
    "title": "Create New Cashbox",
    "name": "CreateNewCashbox",
    "group": "Cashbox",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cashbox",
            "description": "<p>cashbox from values.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/cashbox.py",
    "groupTitle": "Cashbox"
  },
  {
    "type": "get",
    "url": "/cashbox/:id",
    "title": "Delete cashbox for given Id",
    "name": "DeleteCashboxForGivenId",
    "group": "Cashbox",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Cashbox Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/cashbox.py",
    "groupTitle": "Cashbox"
  },
  {
    "type": "get",
    "url": "/casboxes",
    "title": "Cashboxes",
    "name": "GetAllCashboxes",
    "group": "Cashbox",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cashboxes",
            "description": "<p>List of cashboxes.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/cashbox.py",
    "groupTitle": "Cashbox"
  },
  {
    "type": "get",
    "url": "/cashbox/:id",
    "title": "Get cashbox for given Id",
    "name": "GetCashboxForGivenId",
    "group": "Cashbox",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cashbox",
            "description": "<p>cashbox from Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/cashbox.py",
    "groupTitle": "Cashbox"
  },
  {
    "type": "get",
    "url": "/cashbox/:id",
    "title": "Update cashbox for given Id",
    "name": "UpdateCashboxForGivenId",
    "group": "Cashbox",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/cashbox.py",
    "groupTitle": "Cashbox"
  },
  {
    "type": "post",
    "url": "/game",
    "title": "Create New Game",
    "name": "CreateNewGame",
    "group": "Game",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "game",
            "description": "<p>game from values.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/game.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/game/:id",
    "title": "Delete game for given Id",
    "name": "DeleteGameForGivenId",
    "group": "Game",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Game Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/game.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games",
    "title": "Games",
    "name": "GetAllGames",
    "group": "Game",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "games",
            "description": "<p>List of games.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/game.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/game/:id",
    "title": "Get game for given Id",
    "name": "GetGameForGivenId",
    "group": "Game",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "game",
            "description": "<p>game from Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/game.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/game/:id",
    "title": "Update game for given Id",
    "name": "UpdateGameForGivenId",
    "group": "Game",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/game.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/hello",
    "title": "Hello World",
    "name": "HelloWorld",
    "group": "Global",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Hello",
            "description": "<p>World Message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/__init__.py",
    "groupTitle": "Global"
  },
  {
    "type": "get",
    "url": "/location/:location_id/:cashbox_id",
    "title": "Adds a Cashbox to a Location",
    "name": "AddCashboxToLocation",
    "group": "Location",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/location/:location_id/:game_id",
    "title": "Adds a Game to a Location",
    "name": "AddGameToLocation",
    "group": "Location",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/location",
    "title": "Create New Location",
    "name": "CreateNewLocation",
    "group": "Location",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Location Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>location from values.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/location/:id",
    "title": "Delete location for given Id",
    "name": "DeleteLocationForGivenId",
    "group": "Location",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Location Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Location Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/locations",
    "title": "Locations",
    "name": "GetAllLocations",
    "group": "Location",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locations",
            "description": "<p>List of locations.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/location/:id",
    "title": "Get location for given Id",
    "name": "GetLocationForGivenId",
    "group": "Location",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Location Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>location from Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Location"
  },
  {
    "type": "put",
    "url": "/location/:id",
    "title": "Update location for given Id",
    "name": "UpdateLocationForGivenId",
    "group": "Location",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Location Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/log",
    "title": "Create New Log",
    "name": "CreateNewLog",
    "group": "Log",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "log",
            "description": "<p>log from values.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/log/:id",
    "title": "Delete log for given Id",
    "name": "DeleteLogForGivenId",
    "group": "Log",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Log Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/logs",
    "title": "Logs",
    "name": "GetAllLogs",
    "group": "Log",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "logs",
            "description": "<p>List of logs.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/log/:id",
    "title": "Get log for given Id",
    "name": "GetLogForGivenId",
    "group": "Log",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "log",
            "description": "<p>log from Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/log/:id",
    "title": "Update log for given Id",
    "name": "UpdateLogForGivenId",
    "group": "Log",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "post",
    "url": "/role",
    "title": "Create New Role",
    "name": "CreateNewRole",
    "group": "Role",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>role from values.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/role.py",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/roles",
    "title": "Roles",
    "name": "GetAllRoles",
    "group": "Role",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>List of roles.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/role.py",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/:id",
    "title": "Get role for given Id",
    "name": "GetRoleForGivenId",
    "group": "Role",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>role from Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/role.py",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/:id",
    "title": "Update role for given Id",
    "name": "UpdateRoleForGivenId",
    "group": "Role",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/role.py",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/:id",
    "title": "Update role for given Id",
    "name": "UpdateRoleForGivenId",
    "group": "Role",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Role Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/role.py",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Index",
    "name": "Index",
    "group": "Static",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Static",
            "description": "<p>index.html file.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/__init__.py",
    "groupTitle": "Static"
  },
  {
    "type": "get",
    "url": "/transaction/:transaction_id/:voucher_id",
    "title": "Adds a Voucher to a Transaction",
    "name": "AddVoucherToTransaction",
    "group": "Transaction",
    "version": "2.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "/transaction",
    "title": "Create New Transaction",
    "name": "CreateNewTransaction",
    "group": "Transaction",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction from values.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/transaction/:id",
    "title": "Delete transaction for given Id",
    "name": "DeleteTransactionForGivenId",
    "group": "Transaction",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Transaction Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/casboxes",
    "title": "Transactions",
    "name": "GetAllTransactions",
    "group": "Transaction",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "transactions",
            "description": "<p>List of transactions.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/transaction/:id",
    "title": "Get transaction for given Id",
    "name": "GetTransactionForGivenId",
    "group": "Transaction",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "transaction",
            "description": "<p>transaction from Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "put",
    "url": "/transaction/:id",
    "title": "Update transaction for given Id",
    "name": "UpdateTransactionForGivenId",
    "group": "Transaction",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/transaction.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "Login with user",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/auth.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/auth/login",
    "title": "Login with user",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/auth.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "Logout User",
    "name": "LogoutUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/auth.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/register",
    "title": "Register New User",
    "name": "RegisterUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/auth.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Users",
    "name": "Users",
    "group": "User",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/voucher",
    "title": "Create New Voucher",
    "name": "CreateNewVoucher",
    "group": "Voucher",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "voucher",
            "description": "<p>voucher from values.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/voucher.py",
    "groupTitle": "Voucher"
  },
  {
    "type": "get",
    "url": "/voucher/:id",
    "title": "Delete voucher for given Id",
    "name": "DeleteVoucherForGivenId",
    "group": "Voucher",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Voucher Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/voucher.py",
    "groupTitle": "Voucher"
  },
  {
    "type": "get",
    "url": "/casboxes",
    "title": "Vouchers",
    "name": "GetAllVouchers",
    "group": "Voucher",
    "version": "2.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "vouchers",
            "description": "<p>List of vouchers.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/voucher.py",
    "groupTitle": "Voucher"
  },
  {
    "type": "get",
    "url": "/voucher/:id",
    "title": "Get voucher for given Id",
    "name": "GetVoucherForGivenId",
    "group": "Voucher",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "voucher",
            "description": "<p>voucher from Id.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/voucher.py",
    "groupTitle": "Voucher"
  },
  {
    "type": "get",
    "url": "/voucher/:id",
    "title": "Update voucher for given Id",
    "name": "UpdateVoucherForGivenId",
    "group": "Voucher",
    "version": "2.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Log Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entry Unique ID.</p>"
          }
        ]
      }
    },
    "filename": "../cashbox-platform/cashbox/voucher.py",
    "groupTitle": "Voucher"
  }
] });
