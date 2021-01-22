# sample-company

API End Points

GET   /api/v1/user: will give all users 

GET   /api/v1/user/<userID>: will give a specific user with userID

GET   /api/v1/user/<userID>/dep : will give department details of the user

POST  /api/v1/user : create a new user

DELETE  /api/v1/user/<userID>: delete a user
  
PUT   /api/v1/user/<userID>: update a user 
  

GET   /api/v1/dep: will give all departments 

GET   /api/v1/dep/<depID>: will give a specific department with id
  
POST  /api/v1/dep : create a new department

DELETE  /api/v1/dep/<depID>: delete a department
  
PUT   /api/v1/dep/<depID>: update a department 

Project Build

    $ node index.js
  
NPM node modules

    $ npm install
