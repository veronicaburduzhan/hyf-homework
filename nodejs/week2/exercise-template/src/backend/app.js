// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const moviesRouter = require("./api/movies-router");

// This is where you want to create your is chrome browser middleware (second exercise)


// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/movies", moviesRouter);


// For testing purposes only!! Used to check if the middleware function is implemented correctly
// app.get("/middleware-test", async (request, response) => {
//     response.send({ data: 
//         { "isChromeBrowser": request.isChromeBrowser }
//     });
// });

app.use((request, response, next) => {
  const isChromeBrowser = request.headers["user-agent"]
    .toLowerCase()
    .includes("chrome");
  console.log(isChromeBrowser);
  if (isChromeBrowser) {
    request.messageFromMiddle = "Browser is Chrome";
  } else {
    request.messageFromMiddle = "Browser is not Chrome";
  }
  next();
});
​
app.get("/middleware-test", async (request, response) => {
  response.send(request.messageFromMiddle);
});

module.exports = app;