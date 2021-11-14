
# E-Commerce-Back-End
 
 ![MIT](https://img.shields.io/badge/License-MIT-orange)  ![Node.js](https://img.shields.io/badge/Tech-Node.js-lightblue)  ![Express.js](https://img.shields.io/badge/Tech-Express.js-lightblue)  ![MySQL](https://img.shields.io/badge/Tech-MySQL-lightblue)  ![Sequelize](https://img.shields.io/badge/Tech-Sequelize-lightblue) 

## Description
An Express API server synced to a MySQL database with Sequelize. Written for Node.js  

## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [License](#license)

## Installation

This project requires that Node.js be installed on the target machine and that is has write access to a MySQL server.  
Copy the repository files and then run `npm i` to install all required dependencies  
Edit the `.env` file to reflect the network path and login credentials requried to access your MySQL server.  
Login to your MySQL server and `CREATE DATABASE ecommerce_db` then `USE ecommerce_db` then logout.  
To seed teh database with testing data type `npm run seed` 

## Usage

Once the project has been installed and configured as outlined above, you can run the server by typing `node server.js` or `npm start`.  
You may then make GET, POST, PUT, and DELETE requests to the server, as shown in the video below, to create and manage an E-Commerce product database.  
[!Demo Video](videoURL) 

## Questions

[GitHub: Qcent](https://github.com/Qcent)  
dquinn8@cogeco.ca

   
## License

MIT License

Copyright (c) 2021 Dave Quinn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
                 

     