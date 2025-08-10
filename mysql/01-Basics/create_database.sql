-- create database ecommerce;
-- use database ecommerce;
show databases;

CREATE TABLE product (
product_id varchar(10) NOT NULL primary key,
product_name varchar(100) NOT NULL,
category varchar(65) NOT NULL,
sub_category varchar(45) NOT NULL,
original_price double NOT NULL,
sale_price double NOT NULL,
stock int NOT NULL
);

CREATE TABLE customer (
customer_id varchar(10) NOT NULL primary key,
name varchar(100) NOT NULL,
city varchar(65) NOT NULL,
email varchar(45) NOT NULL,
phone_no varchar(15) NOT NULL,
address varchar(100) NOT NULL,
pin_code int NOT NULL
);

CREATE TABLE order_details (
order_id int(11) NOT NULL primary key auto_increment,
customer_id varchar(10) NOT NULL,
product_id varchar(10) NOT NULL,
quantity double NOT NULL,
total_price double NOT NULL,
payment_mode varchar(60) NOT NULL,
order_date DateTime NOT NULL,
order_status varchar(20) NOT NULL,
FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
FOREIGN KEY (product_id) REFERENCES product(product_id)
)