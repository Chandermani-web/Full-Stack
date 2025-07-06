CREATE DATABASE IF NOT EXISTS PRGRAM4;
USE PRGRAM4;

CREATE TABLE IF NOT EXISTS DATA1 (
	ID INT PRIMARY KEY,
    StudentNAME VARCHAR(50),
    GENDER CHAR(1),
    MARKS INT,
    CITY VARCHAR(50)
);

INSERT INTO DATA1 (ID, StudentNAME, GENDER, MARKS, CITY) VALUES
(1, "Suresh", "M", 80, "Jaipur"),
(2, "Siddharth", "M", 36, "Ahmedabad"),
(3, "Rahul", "M", 79, "Pune"),
(4, "Amit", "M", 83, "Hyderabad"),
(5, "Rahul", "M", 46, "Raipur"),
(6, "Divya", "F", 46, "Jaipur"),
(7, "Ankit", "M", 79, "Kolkata"),
(8, "Pooja", "F", 57, "Bhopal"),
(9, "Asha", "F", 94, "Ranchi"),
(10, "Ravi", "M", 82, "Pune");

SELECT * FROM DATA1;

ALTER TABLE DATA1
ADD COLUMN AGE INT;

ALTER TABLE DATA1
DROP COLUMN CITY;

ALTER TABLE DATA1
CHANGE COLUMN ID STUDENT_ID INT;

-- TRUNCATE TABLE DATA1;