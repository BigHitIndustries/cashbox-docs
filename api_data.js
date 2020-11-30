define({ "api": [
  {
    "type": "get",
    "url": "/Game",
    "title": "Record New Log Entry",
    "name": "Game",
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
    "filename": "../cashbox-platform/cashbox/cashbox.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/Game",
    "title": "Record New Log Entry",
    "name": "Game",
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
    "url": "/Game",
    "title": "Record New Log Entry",
    "name": "Game",
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
    "filename": "../cashbox-platform/cashbox/location.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games",
    "title": "Games",
    "name": "Games",
    "group": "Game",
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
    "filename": "../cashbox-platform/cashbox/cashbox.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games",
    "title": "Games",
    "name": "Games",
    "group": "Game",
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
    "filename": "../cashbox-platform/cashbox/game.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games",
    "title": "Games",
    "name": "Games",
    "group": "Game",
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
    "filename": "../cashbox-platform/cashbox/location.py",
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
            "description": "<p>Log Id.</p>"
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
    "url": "/user",
    "title": "Record New Log Entry",
    "name": "User",
    "group": "User",
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
    "filename": "../cashbox-platform/cashbox/user.py",
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
  }
] });
