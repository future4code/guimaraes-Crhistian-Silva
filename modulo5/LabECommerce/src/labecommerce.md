```

CREATE TABLE labecommerce_users (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL, 
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE labecommerce_products (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL, 
price VARCHAR(255) NOT NULL,
image_url VARCHAR(255) NOT NULL
);

CREATE TABLE labecommerce_purchases (
id VARCHAR(255) PRIMARY KEY,
user_id VARCHAR(255) NOT NULL,
product_id VARCHAR(255) NOT NULL,
quantity INT NOT NULL,
total_price FLOAT NOT NULL, 
FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
);

DESCRIBE labecommerce_users; 
DESCRIBE labecommerce_products; 
DESCRIBE labecommerce_purchases; 


SELECT * FROM labecommerce_users;
SELECT * FROM labecommerce_products;
SELECT * FROM labecommerce_purchases;

SELECT prod.name as prod_name, p.quantity, p.total_price
FROM labecommerce_purchases as p
JOIN labecommerce_products as prod ON prod.id = p.product_id
WHERE p.user_id = "a279745e-8c5b-470a-bdca-e0398569c061";

SELECT * 
FROM labecommerce_users as u
inner JOIN labecommerce_purchases as p ON u.id = p.user_id
JOIN labecommerce_products as prod ON prod.id = p.product_id;


```