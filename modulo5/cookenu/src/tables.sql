-- Active: 1659189503693@@35.226.146.116@3306@guimaraes-4211185-crhistian-silva

CREATE TABLE IF NOT EXISTS cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL ,
    password VARCHAR(64) NOT NULL,
    role VARCHAR(64) NOT NULL DEFAULT "NORMAL"
);


CREATE TABLE IF NOT EXISTS cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) UNIQUE NOT NULL,
    description  VARCHAR(255) NOT NULL ,
    preparation_mode VARCHAR(500) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(64) ,
    FOREIGN KEY (author_id) REFERENCES cookenu_users (id)
);
