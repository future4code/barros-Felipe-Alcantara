-- Active: 1674225102411@@35.226.146.116@3306@jbl-4416204-felipe-alcantara
CREATE TABLE Architeture_User(
  ID VARCHAR (255) PRIMARY KEY,
  NAME VARCHAR (255) NULL,
  nickname VARCHAR (255) UNIQUE NOT NULL,
  email VARCHAR (255) UNIQUE NOT NULL,
  password VARCHAR (255) NOT NULL
);