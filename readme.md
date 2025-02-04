# Natours: A Complete Node.js, Express, and MongoDB Application

Welcome to **Natours**, a web application. This project serves as a practical implementation of a modern back-end stack, featuring both a RESTful API and a server-side rendered website.

## 🚀 Live Demo

The application is deployed and available online!  
Visit the live version here: [Natours App](https://appnatours.up.railway.app/) 🌍  

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technologies Used](#%EF%B8%8F-technologies-used)
- [API Documentation](#-api-documentation)
- [Getting Started](#%EF%B8%8F-getting-started)
- [License](#-license)

## 📖 Project Overview

Natours is designed to provide users exploration and booking of tours. The application contains a wide range of functionalities, from user authentication to payment processing, all built using **Node.js, Express, and MongoDB**.

## 🚀 Features

✅ **User Authentication and Authorization**: Sign-up, login and logout.  
✅ **RESTful API**: Advanced filtering, sorting, aliasing, and pagination.  
✅ **Server-Side Rendering**: Dynamic HTML generation using **Pug** templates.  
✅ **CRUD Operations**: Full management of **tours, users, reviews, and bookings**.  
✅ **Secure Payment Processing**: Integration with **Stripe**.  
✅ **File Uploads and Image Processing**: User profile pictures and tour images management with image resizing.  
✅ **Email Notifications**: Automated emails for account verification and booking confirmations.  
✅ **Security Best Practices**: Implementation of data sanitization, rate limiting, and protection against common vulnerabilities.  
✅ **Error Handling**: Mechanisms for catching and managing errors across the application.  
✅ **Deployment Ready**: Configured for deployment on platforms like **Railway**.  
✅ **Advanced Data Handling**:
  - Geospatial queries to find tours within a specified distance.
  - Aggregation pipeline for complex data analysis.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Templating Engine**: Pug
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Payment Processing**: Stripe
- **Email Services**: Nodemailer, SendGrid, Mailtrap
- **File Uploads**: Multer, Sharp
- **Geospatial Data**: Leaflet
- **Bundling**: Parcel
- **Deployment**: Railway

## 📖 API Documentation

This project includes a comprehensive RESTful API for managing users, tours, bookings, and reviews.

### 🔗 Full API Documentation  
For detailed request and response examples, visit the full API documentation:  
[Postman Documentation](https://documenter.getpostman.com/view/35992979/2sAYQfDpCw)

## 🏗️ Getting Started

### 🔹 1. Clone the Repository
```bash
git clone https://github.com/your-username/natours.git
cd natours
```
### 🔹 2. Install Dependencies
```bash
npm install
```
### 🔹 3. Configure Environment Variables
```bash
NODE_ENV=development
PORT=3000
USER=<Your Name>

DATABASE_PASSWORD=<Your MongoDB Password>
DATABASE=<Your MongoDB Connection String>

JWT_SECRET=<Your JWT Secret>
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

EMAIL_USERNAME=<Your Email Username>
EMAIL_PASSWORD=<Your Email Password>
EMAIL_HOST=<Your Email Host>
EMAIL_PORT=<Your Email Port>

SENDGRID_USERNAME=<Your Sendgrid Username>
SENDGRID_PASSWORD=<Your Sendgrid Password>
SENDGRID_EMAIL_FROM=<Sendgrid Email From>

STRIPE_SECRET_KEY=<Your Stripe Secret Key>
STRIPE_WEBHOOK_SECRET=<Your Stripe Webhook Secret>
````
### 🔹 4. Start the Application
```bash
npm start
```
The application will be accessible at http://localhost:3000

## 📝 To-Do List

Here are some possible improvements:

### 🔐 API Enhancements
- [ ] Restrict users to review only tours they have actually booked.
- [ ] Implement nested booking routes: `/tours/:id/bookings` and `/users/:id/bookings`.
- [ ] Improve tour dates:
  - [ ] Add `participants` and `soldOut` fields to each tour date.
  - [ ] Ensure bookings are made for a specific tour date.
  - [ ] Prevent bookings if `participants > maxGroupSize`.
- [ ] Implement advanced authentication features:
  - [ ] Email confirmation for new users.
  - [ ] Refresh tokens to keep users logged in.
  - [ ] Two-factor authentication.

### 🌍 Website Enhancements
- [x] Add a **sign-up form** similar to the login form. ✅
- [ ] Allow users to **submit reviews** directly on the tour detail page if they have taken the tour.
- [ ] Hide the **booking section** on the tour detail page for users who have already booked the tour.
- [ ] Prevent duplicate bookings at the model level.
- [ ] Implement a **"Like Tour"** feature and create a favorites page.
- [ ] Add a **"My Reviews"** section to the user account page:
  - [ ] Display all user reviews.
  - [ ] Allow users to edit their reviews.
- [ ] Admin Panel:
  - [ ] Implement "Manage" pages for administrators to **CRUD** (Create, Read, Update, Delete) tours, users, reviews, and bookings.

## 📝 License

This project is licensed under the **MIT License**. 

This project is developed for educational purposes as part of the Udemy course _"Node.js, Express, MongoDB & More: The Complete Bootcamp"_ by **Jonas Schmedtmann**.

