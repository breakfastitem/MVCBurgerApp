# MVCBurgerApp

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

## Description
This repository contains a full stack web app That communicates with a database, and is designed around the Model,View, Controller philosiphy. The program allows the user to submit burger names. This data is saved in a database. The user can eat the displayed burgers, and eaten burgers are displayed in a different catagory. The design philosiphies used for this app make it scale-able.


## Installation
Downloading respository. In directory run npm install. This program requires mysql.
Run schema.sql in mysql to create database. Then if desired use sampleData.sql to insert sample data into the database. Create a .env file to fill out desired fields for the mysql connection.

## Usage
The application is deployed to https://guarded-taiga-98329.herokuapp.com/.
Server can be run in test usage with node server.js command.

## Credits
Made By Andrew Ehrman.

### Components Used
Node

npm packages
mysql
express
express-handlebars
dotenv