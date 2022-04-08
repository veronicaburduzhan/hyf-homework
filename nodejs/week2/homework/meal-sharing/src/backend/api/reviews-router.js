const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
  response.send(reviews);
});

router.get("/:id", async (request, response) => {
  response.send(reviews[request.params.id - 1]);
});

module.exports = router;
