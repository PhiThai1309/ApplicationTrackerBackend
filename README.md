# Application tracker backend
<img width="1270" alt="image" src="https://github.com/PhiThai1309/application-tracker/assets/71892904/54e7cfbc-5829-483e-af0f-d01cf73d7ac4">

## Table of contents
- [Overview](#Overview)
- [Functionalities](#Functionalities)
- [Endpoints](#Endpoints)
- [How to run](#How-to-run)
- [Built with](#Built-with)
- [Author](#author)

## Overview
Welcome to the Application Tracker Backend! This backend server provides APIs for managing job applications. It utilizes Express.js to handle HTTP requests and MongoDB as the database to store application data.


## Functionalities
The `MainController` class handles various CRUD operations for managing applications:

- **fetch**: Fetches all applications sorted by application date in descending order.
  
- **save**: Saves a new application to the database.
  
- **status**: Retrieves the status options available for applications.
  
- **update**: Updates an existing application by its ID.
  
- **delete**: Deletes an application by its ID.

- **More features in the future**:

## Endpoints

| Method | Endpoint                 | Description                           |
|--------|--------------------------|---------------------------------------|
| GET    | /applications            | Fetch all applications.               |
| POST   | /applications            | Save a new application.               |
| GET    | /statuses                | Get available status options.         |
| PUT    | /applications/:id        | Update an existing application.       |
| DELETE | /applications/:id        | Delete an application.                |

## How to run
### For Back-end:
1. **Clone the repository:**

    ```bash
    git clone https://github.com/PhiThai1309/ApplicationTrackerBackend
    ```

2. **Install dependencies:**

    Navigate to the project directory and run the following command:

    ```bash
    npm install
    ```

3. **Set up your MongoDB connection string:**

    In the `config.js` file, replace `YOUR_MONGODB_CONNECTION_STRING` with your MongoDB connection string:

    ```javascript
    export const mongoURI = "YOUR_MONGODB_CONNECTION_STRING";
    ```

4. **Start the server:**

    Run the following command to start the server:

    ```bash
    npm start
    ```

    This will start the server on port 3000 by default. You can access the API endpoints at `http://localhost:3000`.


6. You can now use the provided APIs to manage job applications.

### For Front-end:
Open [http://localhost:3001](http://localhost:8080) with your browser to see the result. (port 3000 is reserve for backend)


## Built with
Application Tracker is built using the MERN stack:
<p align="center">
  <img src="https://skillicons.dev/icons?i=js" />
  <img src="https://skillicons.dev/icons?i=css">
  <img src="https://skillicons.dev/icons?i=nextjs">
  <img src="https://skillicons.dev/icons?i=ts">
  <img src="https://skillicons.dev/icons?i=express" />
  <img src="https://skillicons.dev/icons?i=nodejs" />
  <img src="https://skillicons.dev/icons?i=mongodb">
  <img src="https://skillicons.dev/icons?i=vscode">
</p>

-	Frontend: NextJS, Typescript
-	Backend: MongoDB, NodeJS, ExpressJS, Mongoose
-	Github & Git


## Author
Thai Manh Phi


