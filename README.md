# Finance Dashboard Backend

## Overview

This project is a backend system for a Finance Dashboard that allows users to manage financial transactions and view analytical insights. It supports role-based access control, secure authentication, and aggregation-based dashboard APIs.

The system is designed with a modular architecture focusing on scalability, maintainability, and clear separation of concerns.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* Joi Validation

---

## Features

### Authentication

* User registration
* User login
* JWT-based authentication

### User Management

* Get all users (Admin only)
* Get single user
* Update user
* Delete user

### Role-Based Access Control

* Viewer: Read-only access
* Analyst: Read + analytics
* Admin: Full access

### Transaction Management

* Create transaction
* Get all transactions with filters
* Get single transaction
* Update transaction
* Delete transaction

### Dashboard APIs

* Total income
* Total expenses
* Net balance
* Category-wise breakdown
* Monthly trends
* Recent transactions

---

## Folder Structure

```
src/
  config/
  modules/
    auth/
    user/
    role/
    transaction/
    dashboard/
  middleware/
  utils/
  routes/
  app.js
server.js
```

---

## Installation

```bash
git clone <your-repo-link>
cd finance-dashboard-backend
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/finance-dashboard
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## Run the Project

```bash
npm run dev
```

or

```bash
node server.js
```

---

## API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Users (Admin only)

* GET /api/users
* GET /api/users/:id
* PUT /api/users/:id
* DELETE /api/users/:id

### Transactions

* POST /api/transactions
* GET /api/transactions
* GET /api/transactions/:id
* PUT /api/transactions/:id
* DELETE /api/transactions/:id

### Dashboard

* GET /api/dashboard/summary
* GET /api/dashboard/categories
* GET /api/dashboard/trends
* GET /api/dashboard/recent

---

## Query Parameters (Transactions)

* type: income | expense
* category: string
* startDate: ISO date
* endDate: ISO date

---

## Design Decisions

* Modular architecture with feature-based structure
* Separation of controller, service, and model layers
* Centralized error handling
* Middleware-based authentication and authorization
* MongoDB aggregation pipelines for analytics

---

## Assumptions

* Each user manages their own financial data
* Roles are predefined (viewer, analyst, admin)
* Authentication is handled via JWT
* No frontend dependency

---

## Future Improvements

* Pagination support
* Advanced filtering and search
* Refresh tokens for authentication
* Rate limiting
* Unit and integration testing
* Swagger API documentation

---

## Author
Rahul Raj
