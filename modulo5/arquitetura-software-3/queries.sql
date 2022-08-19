import {BaseDatabase} ""


CREATE TABLE LABEFLIX_USER (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE LABEFLIX_MOVIE (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL,
    duration_in_minutes INT NOT NULL, 
    year_of_release INT NOT NULL
);