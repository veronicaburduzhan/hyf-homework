CREATE DATABASE MEAL_SHARING_DB DEFAULT CHARACTER SET = 'utf8mb4';
USE MEAL_SHARING_DB;
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` varchar(255) NOT NULL, 
  `description` text NULL DEFAULT NULL, 
  `location` varchar(255) NOT NULL, 
  `when` DATETIME NOT NULL, 
  `max_reservations` int(10) unsigned NOT NULL, 
  `price` DECIMAL(5, 2) NOT NULL, 
  `created_date` DATE DEFAULT NULL
);
CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `number_of_guests` int(10) unsigned NOT NULL, 
  `meal_id` int(10) unsigned NOT NULL, 
  `created_date` DATE DEFAULT NULL, 
  `contact_phonenumber` varchar(255) NULL, 
  `contact_name` varchar(255) NOT NULL, 
  `contact_email` varchar(255) NOT NULL, 
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` varchar(255) NOT NULL, 
  `description` text NULL DEFAULT NULL, 
  `meal_id` int(10) unsigned NOT NULL, 
  `stars` int(10) unsigned DEFAULT NULL, 
  `created_date` DATE DEFAULT NULL, 
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
-- Add values in tables
INSERT INTO meal(
  `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`
) 
VALUES 
  (
    'Croque Madame Sandwich', 'Brioche bread with turkey, chedder, spinach cheese sauce, fried eggs, bacon and hollandaise sause', 
    'Aalborg', '2022-02-26 19:00:00', 
    100, 75, '2022-02-15'
  ) (
    'Avocado Toast', 'Sourdough bread with guacamole, sun-dried tomatoes, salmon, eggs and fresh spinach', 
    'Randers', '2022-03-29 10:00:00', 
    5, 99, '2022-03-20'
  ), 
  (
    'Toast with Eggs Benedict', 'Two English muffins with canadian bacon, poached aggs and hollandaise sause', 
    'Hobro', '2022-04-01 08:00:00', 
    6, 75, '2022-03-21'
  ), 
  (
    'Pancakes with ricotta, pistachio and cherry', 
    'Mini pancakes with fresh ricotta covered in pistachio crust with sweet and sour cherry sauce', 
    'Svensrup', '2022-04-01 14:00:00', 
    10, 89, '2022-03-23'
  );
INSERT INTO reservation (
  `number_of_guests`, `created_date`, 
  `contact_phonenumber`, `contact_name`, 
  `contact_email`, `meal_id`
) 
VALUES 
  (
    10, '2022-03-27', '53453546', 'Mikkel', 
    'mikkel@gmail.com', 1
  ), 
  (
    5, '2022-03-30', '68905678', 'Mads', 
    'mads@gmail.com', 2
  ), 
  (
    15, '2022-04-05', '98760578', 'John', 
    'john@gmail.com', 4
  ), 
  (
    5, '2022-04-05', '23457823', 'Jane', 
    'Jane@gmail.com', 3
  ), 
  (
    7, '2022-04-07', '87654321', 'Rikke', 
    'rikke@gmail.com', 2
  ), 
  (
    10, '2022-04-01', '34523487', 'Lola', 
    'lola@gmail.com', 4
  ), 
  (
    2, '2022-03-30', NULL, 'Mary', 'mary@gmail.com', 
    1
  ), 
  (
    8, '2022-04-03', NULL, 'James', 'james@gmail.com', 
    3
  );
INSERT INTO review (
  `title`, `description`, `meal_id`, 
  `stars`, `created_date`
) 
VALUES 
  (
    'Tasty!', 'Very delicious meal', 
    2, 5, '2022-04-07'
  ), 
  (
    'Not bad', 'Tasty eggs but portions are small', 
    1, 4, '2022-04-10'
  ), 
  (
    'Awful!', 'Eggs was overcooked and avocado didn`t taste well', 
    2, 1, '2022-04-13'
  ), 
  (
    'Awesome place', NULL, 3, 5, '2022-04-07'
  ), 
  (
    'Nice and tasty', 'Something new to try for a small party', 
    4, 5, '2022-04-03'
  ), 
  (
    'Fancy menu but average taste', 
    'Overpriced menu for a such average food', 
    1, 3, '2022-04-04'
  ), 
  (
    'Excellent', 'Like menu and new flavours', 
    3, 5, '2022-04-02'
  ), 
  ('Good', NULL, 2, 4, '2022-04-01');


-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`heroku_f9d62cfeb6c8349`.`reservation`, CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
