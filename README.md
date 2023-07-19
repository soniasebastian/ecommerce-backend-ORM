# ecommerce-backend-ORM
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.ecma-international.org/ecma-262/)
[![Node.js](https://img.shields.io/badge/Node.js-18.16.1-brightgreen.svg)](https://nodejs.org/)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)


[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Description
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms has become a necessary part of full-stack web developement.

This e-commerce application is developed using starter code to create a back-end application for an e-commerce site that uses the command line interface (CLI) and object-relational mapping for various methods of data manipulation, storage, and retrieval when using HTTP methods with a RESTUL API.

It utilises Express.js API which uses Sequelize to interact with a MySQL database in order to build a back end for a shop's website.


## Table of contents
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)
- [WalkthroughVideo](#WalkthroughVideo)
- [Screenshots](#Screenshots)
- [Contribution](#Contribution)
- [Test](#Test) 
- [Questions](#Questions)


## License 
This application is licensed under MIT License
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation:
* Clone the repository to your local machine.
* Install the necessary dependencies (express.js mysql2, sequelize, dotenv) by running npm install in the application's root directory.
* Set up a MySQL database by executing the provided schema and seed files.
* Update the MySQL connection configuration with our own database credentials in a separate .env file (database name, username and password).

## Usage
* Run source.schema.sql, npm run seed and then "node server.js" or npm start from the open integrated terminal.
* In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.
* In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”
* In Insomnia, the user tests “DELETE Category, Product, Tag by ID,” “CREATE Category,Product, Tag ” and “UPDATE Category,  Product, Tag . 


## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
## Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
<br>


## WalkthroughVideo
The following link shows a walkthrough video that demonstrates the functionality of the ecommerce-backend-ORM application
* [Click here for walkthrough video](https://watch.screencastify.com/v/WFMpdxRVc9KQ8EqxPxwC)
<br>

## Screenshots
* In Insomnia get all products with 'GET' using http://localhost:3001/api/products
  ![Screenshot 2023-07-18 134246](https://github.com/soniasebastian/ecommerce-backend-ORM/assets/130253087/96e2953e-969d-4c60-bf13-6f63947649d8)
* In Insomnia get one product with id using http://localhost:3001/api/product/1
  ![Screenshot 2023-07-18 134308](https://github.com/soniasebastian/ecommerce-backend-ORM/assets/130253087/7ec063cf-9666-4a40-a729-4bdaa53b6a76)
* In Insomnia create one product with "POST" using http://localhost:3001/api/products
  ![Screenshot 2023-07-18 134353](https://github.com/soniasebastian/ecommerce-backend-ORM/assets/130253087/0a541590-04a8-40ec-9a14-790ffbade0bc)
* In Insomnia update one product with "PUT" using http://localhost:3001/api/products/6
  ![Screenshot 2023-07-18 134530](https://github.com/soniasebastian/ecommerce-backend-ORM/assets/130253087/bd6718d6-9343-48d9-b1f9-4c3a9b338caf)
* In Insomnia delet one product with "DELETE" using http://localhost:3001/api/products/6
  ![Screenshot 2023-07-18 134547](https://github.com/soniasebastian/ecommerce-backend-ORM/assets/130253087/a5e297f2-c63d-405d-a034-41bc407441d2)


## Links
The URL of the github repository (https://github.com/soniasebastian/ecommerce-backend-ORM)


## Contribution:
   Contributions are most welcome such as bug fixes, feature enhancements, documentation improvements and code optimization.

## Tests: 
     No tests are performed in this project as of now.

## Questions :
  View my [GitHub](https://github.com/soniasebastian) profile

  Email me at soniasebastian011@gmail.com for any queries.

