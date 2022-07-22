Coding Exercise
This document contains the requirements, step-by-step guide and structural description about E2E application and Problem-Solving programs.
E2E application:
Requirements:
* Docker
* Node JS
* NPM
* Git
Step by step guide to RUN the Application:
* First git clone the repository.
* Open path E2E application.
* Then open a terminal on this path and run command ‘docker compose up –build’.
* When docker compose is completed and the containers are running on another terminal run command ‘docker exec -it test-api npx knex migrate:latest’.
* Next you will have to open a browser and type this URL ‘localhost:3000’ for the web portal.
* To access server APIs type ‘localhost:8080’.
* The web portal will contain a Form and a Table (will show up after the first user is inserted). This web portal performs all CRUD tasks.
Structure:
* Web Portal:
o The web portal is created on react JS.
o The form can be used for creating and updating the user.
o The table will list all the user. You can click on edit button to update that user and delete button to delete that user.
o Refresh User List button will fetch all users.
* Server:
o The server is running on Node JS with Express JS.
o The server API are as followed.
* POST /v1/users/
* PUT /v1/users/
* GET /v1/users/
* DELETE /v1/users/:id
o The server uses Knex JS to right SQL queries.
o The functions to mutate or query data.
* Insert.
* Update
* Find All
* Find One
* Delete One
* Database:
o The database used is PostgreSQL.
o Schema is in migration form.
o Schema:
* Id auto increment,
* fullName string,
* contact string,
* address string,
* age number,
* email string, unique,
* password string,
Problem Solving:
Requirements:
* Node JS
* NPM
* Git
Step by step guide to RUN the Application:
* First git clone the repository.
* Open path Problem Solving.
* Then open a terminal on this path and run command ‘npm test’ to run the example and sample data provide in the coding exercise pdf.
* To run a new sample file upload the sample file to this path.
* The sample file should have csv extension.
* The sample file should have column names which are as followed (A sample file is provided test.csv):
o Id,
o area,
o name,
o quantity,
o brand
* To run the program, open a terminal on this path and run command ‘node index.js’.
* This will as you the file name the one you want to run.
* The program will create two file which will contain the result. 
