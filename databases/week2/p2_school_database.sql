CREATE DATABASE SCHOOL_DATABASE
    DEFAULT CHARACTER SET = 'utf8mb4';

USE SCHOOL_DATABASE;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL, 
  `ends` DATETIME NOT NULL
);

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL, 
  `phone` varchar(255) NOT NULL, 
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE `student` ADD INDEX `name_index` (`name`);

ALTER TABLE `class`
ADD `status` ENUM ('Not-started', 'Ongoing', 'Finished') NOT NULL;
