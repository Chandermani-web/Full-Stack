-- Create database and select it
CREATE DATABASE IF NOT EXISTS web_development;
USE web_development;

-- Create the syllabus table
CREATE TABLE syllabus(
	s_no INT AUTO_INCREMENT PRIMARY KEY,
    unit INT,
    unit_name VARCHAR(40)
);

-- Insert correct values (all rows must have 3 values)
INSERT INTO syllabus (s_no, unit, unit_name) VALUES
(1, 1, "Internet basics"),
(2, 2, "Overview of PHP"),
(3, 3, "PHP scripting"),
(4, 4, "COOKIES in PHP"),
(5, 5, "MySQL");

-- View the table
SELECT * FROM syllabus;

-- Add a new column 'professor'
ALTER TABLE syllabus ADD COLUMN professor VARCHAR(50);

-- Modify the datatype of the 'unit' column
ALTER TABLE syllabus MODIFY COLUMN unit VARCHAR(2);
