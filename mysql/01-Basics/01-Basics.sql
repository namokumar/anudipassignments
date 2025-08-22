show DATABASES;

-- ^command to show databases.
CREATE database Employees;

-- ^command to create database.
show databases;

-- DROP database Employees;
-- command to drop database.
-- show databases;
use Employees;

CREATE TABLE
    Company_Nykaa (
        EmpID int,
        FirstName varchar(255),
        LastName varchar(255),
        Address varchar(255),
        City varchar(255),
        Performance float,
        PromotionStatus varchar(255)
    );

show databases;