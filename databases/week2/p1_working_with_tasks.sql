use HYFDB;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO 
    task(title, description, created, updated, due_date, status_id, user_id) 
VALUES 
    ('Watch Netflix', 'Dark S3E4', '2017-10-25 06:54:16', '2017-10-15 13:05:09', NULL, 2, 4);
	
-- Change the title of a task
UPDATE task
SET title = 'Iron all clothing'
WHERE id = 11;

-- Change a task due date
UPDATE task
SET due_date = '2017-10-20 19:00:00'
WHERE id = 11;

-- Change a task status
UPDATE task
SET status_id = 3
WHERE id = 1;

-- Mark a task as complete
UPDATE task
SET status_id = (
    SELECT id
    FROM status
    WHERE name = 'done'
)
WHERE id = 6;

-- Delete a task
DELETE FROM task
WHERE id = 8;