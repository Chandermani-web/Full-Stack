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
(10, "Ravi", "M", 82, "Pune"),
(11, "Mohit", "M", 79, "Itanagar"),
(12, "Amit", "M", 41, "Panaji"),
(13, "Simran", "F", 57, "Gangtok"),
(14, "Nikhil", "M", 84, "Ahmedabad"),
(15, "Ankit", "M", 63, "Chandigarh"),
(16, "Riya", "F", 80, "Pune"),
(17, "Mohit", "M", 69, "Ahmedabad"),
(18, "Pooja", "F", 91, "Chennai"),
(19, "Riya", "F", 81, "Jaipur"),
(20, "Asha", "F", 72, "Jammu"),
(21, "Manish", "M", 38, "Ahmedabad"),
(22, "Karan", "M", 38, "Panaji"),
(23, "Riya", "F", 50, "Ranchi"),
(24, "Nikhil", "M", 99, "Mumbai"),
(25, "Simran", "F", 71, "Ranchi"),
(26, "Payal", "F", 31, "Gangtok"),
(27, "Nikhil", "M", 30, "Dehradun"),
(28, "Manish", "M", 46, "Delhi"),
(29, "Siddharth", "M", 97, "Pune"),
(30, "Asha", "F", 31, "Chandigarh"),
(31, "Riya", "F", 72, "Kolkata"),
(32, "Shreya", "F", 90, "Ranchi"),
(33, "Siddharth", "M", 49, "Jaipur"),
(34, "Ankit", "M", 41, "Aizawl"),
(35, "Rahul", "M", 63, "Chandigarh"),
(36, "Nikhil", "M", 41, "Pune"),
(37, "Naina", "F", 44, "Bengaluru"),
(38, "Riya", "F", 45, "Dehradun"),
(39, "Riya", "F", 41, "Dehradun"),
(40, "Neha", "F", 74, "Aizawl"),
(41, "Siddharth", "M", 59, "Gangtok"),
(42, "Naina", "F", 93, "Lucknow"),
(43, "Mohit", "M", 49, "Jammu"),
(44, "Neha", "F", 90, "Bengaluru"),
(45, "Shreya", "F", 99, "Mumbai"),
(46, "Naina", "F", 41, "Raipur"),
(47, "Amit", "M", 45, "Kolkata"),
(48, "Neha", "F", 54, "Lucknow"),
(49, "Mohit", "M", 68, "Raipur"),
(50, "Nikhil", "M", 32, "Jaipur"),
(51, "Simran", "F", 91, "Dehradun"),
(52, "Karan", "M", 83, "Bengaluru"),
(53, "Simran", "F", 46, "Raipur"),
(54, "Pooja", "F", 74, "Jaipur"),
(55, "Ravi", "M", 53, "Jammu"),
(56, "Asha", "F", 51, "Bhopal"),
(57, "Payal", "F", 75, "Chennai"),
(58, "Divya", "F", 91, "Dehradun"),
(59, "Ravi", "M", 97, "Hyderabad"),
(60, "Ravi", "M", 30, "Jaipur"),
(61, "Isha", "F", 77, "Panaji"),
(62, "Pooja", "F", 51, "Bhopal"),
(63, "Manish", "M", 51, "Itanagar"),
(64, "Divya", "F", 58, "Mumbai"),
(65, "Ankit", "M", 69, "Jaipur"),
(66, "Suresh", "M", 79, "Jaipur"),
(67, "Karan", "M", 79, "Itanagar"),
(68, "Manish", "M", 37, "Jaipur"),
(69, "Rahul", "M", 84, "Chennai"),
(70, "Mohit", "M", 56, "Itanagar"),
(71, "Ravi", "M", 83, "Panaji"),
(72, "Payal", "F", 75, "Bhopal"),
(73, "Amit", "M", 82, "Hyderabad"),
(74, "Suresh", "M", 56, "Itanagar"),
(75, "Nikhil", "M", 34, "Chandigarh"),
(76, "Nikhil", "M", 92, "Aizawl"),
(77, "Payal", "F", 89, "Aizawl"),
(78, "Suresh", "M", 33, "Kolkata"),
(79, "Karan", "M", 94, "Chandigarh"),
(80, "Isha", "F", 83, "Panaji"),
(81, "Siddharth", "M", 39, "Gangtok"),
(82, "Rahul", "M", 36, "Raipur"),
(83, "Amit", "M", 30, "Dehradun"),
(84, "Pooja", "F", 44, "Jammu"),
(85, "Asha", "F", 74, "Jaipur"),
(86, "Ankit", "M", 32, "Chennai"),
(87, "Divya", "F", 31, "Bhopal"),
(88, "Isha", "F", 82, "Chennai"),
(89, "Divya", "F", 63, "Hyderabad"),
(90, "Manish", "M", 34, "Chandigarh"),
(91, "Shreya", "F", 42, "Chandigarh"),
(92, "Amit", "M", 80, "Raipur"),
(93, "Mohit", "M", 32, "Bhopal"),
(94, "Manish", "M", 94, "Hyderabad"),
(95, "Ankit", "M", 81, "Ahmedabad"),
(96, "Shreya", "F", 70, "Mumbai"),
(97, "Rahul", "M", 61, "Ranchi"),
(98, "Siddharth", "M", 48, "Kolkata"),
(99, "Rahul", "M", 58, "Chandigarh"),
(100, "Simran", "F", 74, "Bengaluru");

SELECT * FROM DATA1 
WHERE GENDER = "M" AND CITY = "Chandigarh";

SELECT * FROM DATA1
WHERE GENDER = "F" AND MARKS+10 > 100;

SELECT * FROM DATA1 
WHERE MARKS > 90 OR CITY = "Kolkata";

SELECT * FROM DATA1
WHERE GENDER = "F" AND CITY != "Kolkata";

SELECT * FROM DATA1 
WHERE StudentNAME = "MOHIT";

SELECT * FROM DATA1
WHERE MARKS BETWEEN 85 AND 90;

SELECT * FROM DATA1
WHERE CITY IN ("Delhi","Raipur");

SELECT * FROM DATA1
WHERE CITY NOT IN ("Delhi","Raipur");

SELECT * FROM DATA1 
WHERE GENDER = "M";

SELECT * FROM DATA1
WHERE MARKS >= 85;

SELECT * FROM DATA1 
LIMIT 10;

SELECT * FROM DATA1
ORDER BY MARKS ASC;

SELECT * FROM DATA1
ORDER BY MARKS DESC
LIMIT 5;

SELECT * FROM DATA1
ORDER BY CITY ASC;
