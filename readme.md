# Natours: A Complete Node.js, Express, and MongoDB Application

Welcome to **Natours**, a web application. This project serves as a practical implementation of a modern back-end stack, featuring both a RESTful API and a server-side rendered website.

## 📌 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [License](#license)

## 📖 Project Overview

Natours is designed to provide users exploration and booking of tours. The application contains a wide range of functionalities, from user authentication to payment processing, all built using **Node.js, Express, and MongoDB**.

## 🚀 Features

✅ **User Authentication and Authorization**: Sign-up, login and logout.  
✅ **RESTful API**: Advanced filtering, sorting, aliasing, and pagination.  
✅ **Server-Side Rendering**: Dynamic HTML generation using **Pug** templates.  
✅ **CRUD Operations**: Full management of **tours, users, reviews, and bookings**.  
✅ **Advanced Data Handling**:
  - Geospatial queries to find tours within a specified distance.
  - Aggregation pipeline for complex data analysis.  
✅ **Secure Payment Processing**: Integration with **Stripe**.  
✅ **File Uploads and Image Processing**: User profile pictures and tour images management with image resizing.  
✅ **Email Notifications**: Automated emails for account verification and booking confirmations.  
✅ **Security Best Practices**: Implementation of data sanitization, rate limiting, and protection against common vulnerabilities.  
✅ **Error Handling**: Mechanisms for catching and managing errors across the application.  
✅ **Deployment Ready**: Configured for deployment on platforms like **Railway**.  

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

## 📝 License

This project is licensed under the **MIT License**. 

This project is developed for educational purposes as part of the Udemy course _"Node.js, Express, MongoDB & More: The Complete Bootcamp"_ by **Jonas Schmedtmann**.

