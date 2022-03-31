const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals.json");
const reviews = require("./data/reviews.json");
const reservations = require("./data/reservations.json");

//responds with all meals (with their reviews, if any) from data file
const mealsWithReviews = meals.map(meal => {
  const mealReview = reviews.filter(review => review.mealId === meal.id);
  return Object.assign(meal, ({ "reviews": mealReview }));
});

//respond with the json for all the meals (including it's reviews) that are cheap
const cheapMeals = mealsWithReviews.filter(meal => meal.price < 70);

//respond with the json for all the meals (including it's reviews) that can fit lots of people
const largeMeals = mealsWithReviews.filter((meal) => meal.maxNumberOfGuests > 6);

//responds with a single random meal from the data file
const randomMealNum = Math.floor(Math.random() * mealsWithReviews.length);
const randomReservationNum = Math.floor(Math.random() * reservations.length);

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  response.send(meals[randomMealNum]);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(reservations[randomReservationNum]);
});

module.exports = app;
