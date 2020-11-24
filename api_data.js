define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Blog Posts",
    "name": "BlogPosts",
    "group": "Blog",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "posts",
            "description": "<p>all blog posts.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/blog.py",
    "groupTitle": "Blog"
  },
  {
    "type": "get",
    "url": "/create",
    "title": "Create New Blog Post",
    "name": "CreatePost",
    "group": "Blog",
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
    "version": "0.0.0",
    "filename": "../cashbox-platform/cashbox/blog.py",
    "groupTitle": "Blog"
  },
  {
    "type": "get",
    "url": "/:id/delete",
    "title": "Delete Blog Post",
    "name": "DeletePost",
    "group": "Blog",
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
    "filename": "../cashbox-platform/cashbox/blog.py",
    "groupTitle": "Blog"
  },
  {
    "type": "get",
    "url": "/:id/update",
    "title": "Update Blog Post",
    "name": "UpdatePost",
    "group": "Blog",
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
    "filename": "../cashbox-platform/cashbox/blog.py",
    "groupTitle": "Blog"
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
    "url": "/log/entries",
    "title": "Log Entries",
    "name": "LogEntries",
    "group": "Log",
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
    "filename": "../cashbox-platform/cashbox/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/log",
    "title": "Record New Log Entry",
    "name": "LogEntry",
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
  }
] });
