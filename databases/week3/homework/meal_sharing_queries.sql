USE MEAL_SHARING_DB;
-- MEAL QUERIES
-- Get all meals
SELECT 
  * 
FROM 
  meal;
-- Add a new meal
INSERT INTO meal(
  `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`
) 
VALUES 
  (
    'Cheesecake', 'Classic cheesecake New York with salted caramel on top', 
    'Aalborg', '2022-03-30 19:00:00', 
    50, 65, '2022-02-27'
  );
-- Get a meal with any id
SELECT 
  * 
FROM 
  meal 
WHERE 
  id = 2;
-- Update a meal with any id, update any attribute fx the title or multiple attributes
UPDATE 
  meal 
SET 
  max_reservations = 20, 
  price = 89 
WHERE 
  id = 4;
-- Delete a meal with any id
DELETE FROM 
  meal 
WHERE 
  id = 5;
-- RESERVATION QUERIES
-- Get all reservations
SELECT 
  * 
FROM 
  reservation;
-- Add a new reservation
INSERT INTO reservation (
  `number_of_guests`, `created_date`, 
  `contact_phonenumber`, `contact_name`, 
  `contact_email`, `meal_id`
) 
VALUES 
  (
    12, '2022-04-20', '34785903', 'Cecillie', 
    'cecillie@gmail.com', 3
  );
-- Get a reservation with any id
SELECT 
  * 
FROM 
  reservation 
WHERE 
  id = 5;
-- Update a reservation with any id, update any attribute fx the title or multiple attributes
UPDATE 
  reservation 
SET 
  number_of_guests = 3
  contact_phonenumber = '56789043'
WHERE 
  id = 7;
-- Delete a reservation with any id, fx 1
DELETE FROM 
  reservation 
WHERE 
  id = 9;
-- REVIEW QUERIES
-- Get all reviews
SELECT 
  * 
FROM 
  review;
-- Add a new review
INSERT INTO review (
  `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    'Very good', NULL, 4, 5, '2022-04-07'
  );
-- Get a review with any id
SELECT 
  * 
FROM 
  review 
WHERE 
  id = 4;
-- Update a review with any id, update any attribute fx the title or multiple attributes
UPDATE 
  review 
SET 
  description = 'Best eggs Benedict ever', 
  meal_id = 3 
WHERE 
  id = 9;
-- Delete a review with any id
DELETE FROM 
  review 
WHERE 
  id = 9;
-- ADDITIONAL QUERIES
-- Get meals that has a price smaller than a specific price
SELECT 
  * 
FROM 
  meal 
WHERE 
  price <= 80;
-- Get meals that still has available reservations
SELECT 
  meal.id AS 'Id', 
  meal.title AS 'Title', 
  meal.max_reservations As 'Max reservations', 
  SUM(reservation.number_of_guests) As 'Total order', 
  (
    meal.max_reservations - SUM(reservation.number_of_guests)
  ) AS 'Avaliable reservations' 
FROM 
  meal 
  INNER JOIN reservation ON meal.id = reservation.meal_id 
GROUP BY 
  meal.id 
HAVING 
  (
    meal.max_reservations - SUM(reservation.number_of_guests)
  ) > 0;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT 
  * 
FROM 
  meal 
WHERE 
  title LIKE '%toast%';
-- Get meals that has been created between two dates
SELECT 
  * 
FROM 
  meal 
WHERE 
  created_date BETWEEN '2022-03-21' 
  AND '2022-03-25';
-- Get only specific number of meals fx return only 5 meals
SELECT 
  * 
FROM 
  meal 
LIMIT 
  5;
-- Get the meals that have good reviews
SELECT 
  meal.id AS 'Id', 
  meal.title AS 'Meal', 
  meal.description AS 'Meal description', 
  review.title AS 'Title', 
  review.description AS 'Review description', 
  review.stars AS 'Stars', 
  review.created_date AS 'Created date' 
FROM 
  meal 
  INNER JOIN review ON meal.id = review.meal_id 
WHERE 
  review.stars >= 4;
-- Get reservations for a specific meal sorted by created_date
SELECT 
  reservation.* 
FROM 
  reservation 
  INNER JOIN meal ON reservation.meal_id = meal.id 
WHERE 
  meal.id = 2 
ORDER BY 
  created_date ASC;
-- Sort all meals by average number of stars in the reviews
SELECT 
  meal.id AS 'Id', 
  meal.title AS 'Meal', 
  meal.description AS 'Meal description', 
  ROUND(
    AVG(review.stars), 
    1
  ) AS 'Average rating' 
FROM 
  meal 
  INNER JOIN review ON meal.id = review.meal_id 
GROUP BY 
  meal.id 
ORDER BY 
  ROUND(
    AVG(review.stars), 
    1
  ) DESC;
