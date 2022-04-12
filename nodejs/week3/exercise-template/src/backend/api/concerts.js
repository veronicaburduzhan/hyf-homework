const { request } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const maxPrice = request.query.maxPrice;
    let query = knex("concerts");
    if (maxPrice) {
      query.where(function () {
        this.where("price", "<", maxPrice)
      });
    }
    const filteredConcerts = await query.select(
      "title",
      "band",
      "venue",
      "created_date",
      "performance_date",
      "price"
    );
    response.json(filteredConcerts);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    if (Object.keys(body).length === 0) {
      response.statusCode = 422;
      response.json({ message: "bad input" });
      return;
    }
    const insertConcert = await knex("concerts").insert({
      title: request.body.title,
      band: request.body.band,
      venue: request.body.vanue,
      created_date: request.body.created_date,
      performance_date: request.body.performance_date,
      price: request.body.price,
    });
    response.json(insertConcert);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const concertsById = await knex("concerts")
      .where({ id: id })
      .select(
        "title",
        "band",
        "venue",
        "created_date",
        "performance_date",
        "price"
      );
    response.json(concertsById);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const updateConcert = await knex("concerts").where({ id: id }).update({
      venue: request.body.venue,
      price: request.body.price,
    });
    response.json(updateConcert);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deleteById = await knex("concerts").where({ id: id }).del();
    response.json(deleteById);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
