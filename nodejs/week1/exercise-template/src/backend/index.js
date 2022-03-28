// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");

const createTitle = require("./title_creator.js");

app.get("/", (request, response) => {
  response.send(`
  ${createTitle("Home")}
    <body>
        <h1>My portfolio</h1>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
${createTitle("Contact")}
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
        <a href="https://www.instagram.com/veronica.burduzhan/">Instagram</a>
    </body>
  `);
});

app.get("/skills", (request, response) => {
  response.send(`
  ${createTitle("Skills")}
    <body>
        <h1>Skills</h1>
        <p>This is a skills page</p>
    </body>
  `);
});

app.get("/education", (request, response) => {
  response.send(`
  ${createTitle("Education")}
    <body>
        <h1>Education</h1>
        <p>This is a education page</p>
    </body>
  `);
});

app.get("/projects", (request, response) => {
  response.send(`
  ${createTitle("Projects")}
    <body>
        <h1>Education</h1>
        <p>This is a education page</p>
    </body>
  `);
});

app.get('/test-report', function(requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
