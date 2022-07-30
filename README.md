# Coding Exercise
This document contains the requirements, step-by-step guide and structural description about E2E application and Problem-Solving programs.

Clone and setup the repository.
```
$ git clone https://github.com/MuneebRazi/coding-test.git
```
## E2E application:
### Requirements:
  * Docker
  * Node JS
  * NPM
  * Git

### Step by step guide to RUN the Application:
To run the program
 ```
 $ cd coding-test/E2E application
 $ docker compose up --build
 ```
 When the docker containers have started run in a new terminal
 ```
 $ docker exec -it test-api npx knex migrate:latest
 ```
  * Next you will have to open a browser and enter the URL for the web portal.
  ```
  http://localhost:8080
  ```
  * To access server APIs enter 
  ```
  http://localhost:7000
  ```
  * The web portal will contain a Form and a Table (the table will show up after the first user is inserted). This web portal performs all CRUD tasks.

### Structure:

  #### Web Portal:
   - The web portal is created on react JS.
   - The form can be used for creating and updating the user.
   - The table will list all the user. You can click on edit button to update that user and delete button to delete that user.
   - Refresh User List button will fetch all users.
    
  #### Server:
   - The server is running on Node JS with Express JS.
   - The server API are as followed

     - POST /v1/users
     - PUT /v1/users
     - GET /v1/users
     - DELETE /v1/users/:id

  #### Database:
  - The database used is PostgreSQL.
  - Schema is in migration form.
  - Schema:
    - id auto increment,
    - fullName string,
    - contact string,
    - address string,
    - age number,
    - email string, unique,
    - password string,

## Problem Solving:

### Requirements:
  - Node JS
  - NPM
  - Git

### Step by step guide to RUN the Application:

```
$ cd coding-test/Problem Solving
$ npm install
```
The file should be a CSV and should be similar to the exmaple given in the task.

To run the application
```
$ node index.js
```
Enter the file name as asked by the system.

The program will create two file which will contain the result.

To run the tests
```
$ npm test
```
 
