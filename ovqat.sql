CREATE DATABASE ovqat;
USE ovqat;

CREATE TABLE restoran(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255)
);

CREATE TABLE ovqatlar(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

CREATE TABLE restoran_menu(
    id INT PRIMARY KEY AUTO_INCREMENT,
    restoran_id INT,
    ovqat_id INT,
    price FLOAT(10,2)
);

CREATE TABLE yetkazuvchilar(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE mijozlar(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE buyurtmalar(
    id INT PRIMARY KEY AUTO_INCREMENT,
    zakaz INT,
    yetkazuvchi_id INT,
    mijoz_id INT,
    zakaz_vaqti DATE,
    quantity INT
);