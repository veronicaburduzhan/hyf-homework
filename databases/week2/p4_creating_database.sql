CREATE DATABASE ART_WORK_GALLERY
    DEFAULT CHARACTER SET = 'utf8mb4';

USE ART_WORK_GALLERY;

CREATE TABLE `artist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `birthplace` varchar(255) NOT NULL, 
  `style_of_work` varchar(255) NOT NULL
);

CREATE TABLE `art_work` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `artist_id` int(10) unsigned NOT NULL,
  `year` varchar(255) NOT NULL, 
  `style_of_art` varchar(255) NOT NULL, 
  `price` varchar(255) NOT NULL, 
  `status_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_artist` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `availability` ENUM ('In stock', 'Sold') NOT NULL
);

CREATE TABLE `employee` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `working_day` ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday') NOT NULL
);

CREATE TABLE `sale` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `employee_id` int(10) unsigned NOT NULL,
  `art_work_id` int(10) unsigned NOT NULL,
  `sold` DATETIME NOT NULL,
  CONSTRAINT `fk_employee` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_art_work` FOREIGN KEY (`art_work_id`) REFERENCES `art_work` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);


