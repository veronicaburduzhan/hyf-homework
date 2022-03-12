-- Find out how many tasks are in the task table
SELECT 
  COUNT(title) 
FROM 
  task;
  
-- Find out how many tasks in the task table do not have a valid due date
SELECT 
  COUNT(title) 
FROM 
  task 
WHERE 
  due_date IS NULL;

-- Find all the tasks that are marked as done
SELECT 
  * 
FROM 
  task 
  JOIN status ON task.status_id = status.id 
WHERE 
  status.name = "done";

-- Find all the tasks that are not marked as done
SELECT 
  * 
FROM 
  task 
  JOIN status ON task.status_id = status.id 
WHERE 
  NOT status.name = "done";

-- Get all the tasks, sorted with the most recently created first
SELECT 
  * 
FROM 
  task 
ORDER BY 
  created DESC;

-- Get the single most recently created task
SELECT
*
FROM
task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT 
  title, 
  description,
  due_date 
FROM 
  task 
WHERE 
  title LIKE '%database%' 
  OR description LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT 
  task.title, 
  status.name 
FROM 
  task 
  INNER JOIN status ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT 
  COUNT(task.title) AS COUNT, 
  status.name 
FROM 
  task 
  INNER JOIN status ON task.status_id = status.id 
GROUP BY 
  status.name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT 
  status.name 
FROM 
  task 
  INNER JOIN status ON task.status_id = status.id 
GROUP BY 
  status.name 
ORDER BY 
  COUNT(task.title) DESC
