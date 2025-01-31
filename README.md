# Backend API for Subscribers

This project is a simple backend API for managing subscribers using Node.js, Express, and MongoDB. It allows you to perform CRUD operations (Create, Read, Update, Delete) on subscriber data.

## Features

- **Get all subscribers**: Retrieve a list of all subscribers.
- **Get a single subscriber**: Retrieve details of a specific subscriber by ID.
- **Create a new subscriber**: Add a new subscriber to the database.
- **Update a subscriber**: Update details of an existing subscriber.
- **Delete a subscriber**: Remove a subscriber from the database.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account or a local MongoDB server.
- MongoDB Compass (optional, for database management).

## Setup

### 1. Clone the repository

First, run this command in the terminal

- Clone repo locally with git clone https://github.com/Predrag-Jandric/Express-practice.git
- Navigate inside the folder using "cd /name/" command
- Install dependencies with "npm install"
- To set up environment variables, create .env file in the root of your project and add your MongoDB connection string:
  DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
- Start the server with npm start

<hr>

### API Endpoints

Get all subscribers <br>
`GET /subscribers`

Get a single subscriber <br>
`GET /subscribers/:id`

Create a new subscriber <br>
`POST /subscribers`

```
Content-Type: application/json

{
  "name": "John",
  "subscribedToChannel": "hunting in wild"
}
```

Update a subscriber <br>
`PATCH /subscribers/:id`

```
Content-Type: application/json

{
  "name": "PETER2"
}
```

Delete a subscriber <br>
`DELETE /subscribers/:id`

<hr>

### Connecting to MongoDB Atlas

#### Create a MongoDB Atlas Account:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account.

#### Create a New Cluster:

1. After signing in, click on "Build a Cluster".
2. Choose the free tier (M0 Sandbox) and select your preferred cloud provider and region.
3. Click "Create Cluster".

#### Create a Database User:

1. Once your cluster is created, click on "Database Access" in the left-hand menu.
2. Click "Add New Database User".
3. Create a username and password for your database user. Make sure to save these credentials as you will need them later.

#### Allow Network Access:

1. Click on "Network Access" in the left-hand menu.
2. Click "Add IP Address".
3. You can either allow access from anywhere by adding `0.0.0.0/0` or specify your IP address.

#### Get Your Connection String:

1. Click on "Clusters" in the left-hand menu.
2. Click "Connect" next to your cluster.
3. Choose "Connect your application".
4. Copy the connection string provided and update your `.env` file.

### Using MongoDB Compass

#### Download and Install MongoDB Compass:

1. Go to [MongoDB Compass](https://www.mongodb.com/products/compass) and download the application for your operating system.
2. Install and open MongoDB Compass.

#### Connect to Your Atlas Cluster:

1. In MongoDB Compass, paste the connection string you copied from MongoDB Atlas.
2. Replace `<username>` and `<password>` with the database user credentials you created.
3. Click "Connect".
