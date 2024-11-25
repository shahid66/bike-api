# Bike Store API

## Project Overview

The **Bike Store API** is built using **Express.js** and **TypeScript**, integrated with **MongoDB** through **Mongoose** for data management. It provides RESTful endpoints to manage bikes (products) and orders while ensuring data integrity with schema validation. The API also features inventory management and robust error handling.

---

## Features

### Bike Management

- Add, view, update, and delete bikes.
- Retrieve all bikes or filter by specific attributes like `category`, `name`, or `brand`.
- Validate bike data using **Mongoose schema**.

### Order Management

- Place orders for bikes, automatically updating inventory and stock status.
- Handle insufficient stock gracefully with error responses.
- Calculate total revenue from orders using **MongoDB's aggregation pipeline**.

### Error Handling

- Global error handler for consistent error responses.
- Custom error messages for validation errors and resource issues.

---

## Endpoints

### Bike Endpoints

#### 1. Create a Bike

**Endpoint**: `/api/products`  
**Method**: `POST`

#### 2. Get All Bikes

**Endpoint**: `/api/products`  
**Method**: `GET`

#### 3. Get a Specific Bike

**Endpoint**: `/api/products/:productId`  
**Method**: `GET`

#### 4. Update a Bike

**Endpoint**: `/api/products/:productId`  
**Method**: `PUT`

#### 5. Delete a Bike

**Endpoint**: `/api/products/:productId`  
**Method**: `DELETE`

### Order Endpoints

#### 1. Create an Order

**Endpoint**: `/api/orders`  
**Method**: `POST`

#### 2. Calculate Revenue

**Endpoint**: `/api/orders/revenue`  
**Method**: `GET`

# Setup and Installation

## Clone the Repository

```bash
git clone https://github.com/username/bike-store-api.git
cd bike-store-api

```

## Install Dependencies

```bash
git clone https://github.com/username/bike-store-api.git
cd bike-store-api

```

### Create a .env File

Add a `.env` file in the root directory with the following content:

```bash

PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bike-store

```

### Start the Server

To start the server in development mode, use the following command:

```bash

npm run start:dev


```

## Test the API
You can test the API using tools like Postman or cURL.

# Technologies Used
- Node.js and Express.js
- TypeScript
- MongoDB with Mongoose

