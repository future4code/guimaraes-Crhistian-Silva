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


CREATE TABLE IF NOT EXISTS cookenu_users_relations (
    id VARCHAR(64) PRIMARY KEY,
    id_user_follower VARCHAR(64) UNIQUE NOT NULL,
    id_user_followed  VARCHAR(255) NOT NULL ,
    FOREIGN KEY (id_user_follower) REFERENCES cookenu_users (id),
    FOREIGN KEY (id_user_followed) REFERENCES cookenu_users (id)
);


ALTER TABLE cookenu_users_relations DROP INDEX id_user_follower ;

DESCRIBE cookenu_recipes;