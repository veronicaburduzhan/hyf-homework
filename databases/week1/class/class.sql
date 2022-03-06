SELECT 
  name 
FROM 
  user;
SELECT 
  name 
FROM 
  user 
WHERE 
  id LIKE 10;
SELECT 
  COUNT(name) 
FROM 
  user;
SELECT 
  * 
FROM 
  user 
LIMIT 
  5;
SELECT 
  * 
FROM 
  user 
ORDER BY 
  id DESC 
LIMIT 
  3;
SELECT 
  * 
FROM 
  user 
ORDER BY 
  name;
SELECT 
  * 
FROM 
  task 
WHERE 
  title LIKE "%sql%" 
  OR description LIKE "%sql%";
SELECT 
  task.title, 
  user.name 
FROM 
  task 
  INNER JOIN user ON task.user_id = user.id 
WHERE 
  user.name LIKE 'Mary%';
SELECT 
  COUNT(task.title), 
  user.name 
FROM 
  task 
  INNER JOIN user ON task.user_id = user.id 
GROUP BY 
  user.name;
SELECT 
  COUNT(task.id), 
  user.name 
FROM 
  task 
  INNER JOIN user ON task.user_id = user.id 
  INNER JOIN status ON task.status_id = status.id 
WHERE 
  status.name LIKE "%done%" 
GROUP BY 
  user.name;
