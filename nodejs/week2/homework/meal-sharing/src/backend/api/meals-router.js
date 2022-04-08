const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  try {
    const maxPrice = request.query.maxPrice;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
    let filteredMeals;
    if (maxPrice) {
      if (!isNaN(parseInt(maxPrice))) {
        filteredMeals = meals.filter((meal) => meal.price < maxPrice);
        response.send(filteredMeals);
      } else {
        response.send(400);
      }
    } else if (title) {
      filteredMeals = meals.filter((meal) =>
        meal.title.toLowerCase().includes(title)
      );
      response.send(filteredMeals);
    } else if (createdAfter) {
      const selectedMealDate = new Date(createdAfter);
      if (Date.parse(selectedMealDate)) {
        filteredMeals = meals.filter((meal) => {
          const createdAt = new Date(meal.createdAt);
          return createdAt > selectedMealDate;
        });
        response.send(filteredMeals);
      } else {
        response.send(400);
      }
    } else if (limit) {
      if (!isNaN(parseInt(limit))) {
        filteredMeals = meals.slice(0, limit);
        response.send(filteredMeals);
      } else {
        response.send(400);
      }
    } else if (Object.keys(request.query).length === 0) {
      response.send(meals);
    } else {
      response.send(
        `You chose invalid query parameter. Please, update an url!`
      );
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const selectedMealId = request.params.id;
    if (!isNaN(parseInt(selectedMealId))) {
      meals.forEach((meal) => {
        if (meal.id === selectedMealId) {
          response.send(meals[selectedMealId]);
        } else {
          response.send(`There is no meal with a such id.`);
        }
      });
    } else {
      response.send(400);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;