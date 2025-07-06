create database if not exists employee;

use employee;

create table if not exists employeedata(
	id int primary key,
    name varchar(50),
    salary int
);

insert into employeedata values (020123002,"Chandermani",150000),(020123004,"Ankit",15000),(020123006,"Amit Kumar",70000);

select * from employeedata;