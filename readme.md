@namindu/html-to-pdf-node library is written based on another library [pdf-creator-node ](https://www.npmjs.com/package/pdf-creator-node ). pdf-creator-node used Handlebars as the template engine. This library uses [EJS template engine](https://ejs.co/#docs) to generate HTML. You can use EJS syntax to generate dynamic content.

# Follow these steps to convert HTML to PDF

- Step 1 - install the pdf creator package using the following command

  `$ npm i @namindu/html-to-pdf-node`


- Step 2 - Add required packages and read HTML template

  ```javascript
  //Required package
  var pdf = require("@namindu/html-to-pdf-node");
  var fs = require("fs");

  // Read HTML Template
  var html = fs.readFileSync("template.ejs", "utf8");
  ```

With ES6 import syntax

  ```javascript
  //Required package
  import pdf from "@namindu/html-to-pdf-node";
  import fs from "fs";

  // Read HTML Template
  const html = fs.readFileSync("template.ejs", "utf8");
  ```

- Step 3 - Create your HTML Template

This library uses [EJS template engine](https://ejs.co/#docs) to generate HTML. You can use EJS syntax to generate dynamic content.

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Hello world!</title>
    </head>
    <body>
      <h1>User List</h1>
      <ul>
        <% users.forEach(function(user) { %>
        <li>Name: <%= user.name %></li>
        <li>Age: <%= user.age %></li>
        <br />
        <% }); %>
      </ul>
    </body>
  </html>
  ```

- Step 4 - Provide format and orientation as per your need

  > "height": "10.5in", // allowed units: mm, cm, in, px

  > "width": "8in", // allowed units: mm, cm, in, px

  - or -

  > "format": "Letter", // allowed units: A3, A4, A5, Legal, Letter, Tabloid

  > "orientation": "portrait", // portrait or landscape

    ```javascript
        var options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
                contents: '<div style="text-align: center;">Footer Text</div>'
            },
            footer: {
                height: "28mm",
                contents: {
                    first: 'Cover page',
                    2: 'Second page', // Any page number is working. 1-based index
                    default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                    last: 'Last Page'
                }
            }
        };
    ```
    
- Step 5 - Provide HTML, user data and PDF path for output

  ```javascript
  var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "file",
  };
  ```
  *Type* can be `buffer` or `stream` or `file` (default is `file`)


- Step 6 - After setting all parameters, just pass document and options to `pdf.create` method.

  ```javascript
  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

### End

### License

@namindu/html-to-pdf-node is [MIT licensed](./LICENSE).
