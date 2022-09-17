-- Active: 1659189503693@@35.226.146.116@3306@guimaraes-4211185-crhistian-silva
 CREATE TABLE IF NOT EXISTS MODALITIES(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            athlete_name VARCHAR(255) NOT NULL,
            value FLOAT NOT NULL DEFAULT 0,
            unity VARCHAR(50) NOT NULL,
            status  VARCHAR(60) NOT NULL DEFAULT "TO START"
         );

         DESCRIBE MODALITIES;

         SELECT * FROM MODALITIES;