const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  response.send(reservations);
});

router.get("/:id", async (request, response) => {
  response.send(reservations[request.params.id - 1]);
});

module.exports = router;
