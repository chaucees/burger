CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    ID INT AUTO_INCREMENT,
    burger_name TEXT NOT NULL,
    devoured TEXT NOT NULL,
    PRIMARY KEY(id)
);