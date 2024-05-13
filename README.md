# sssBags

## Table of contents

- [Introduction](#introduction)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [Database Models](#database)
- [License](#license)

## Introduction

Bags ecommerce website using MERN.

Fell free to raise issue if you face somthing (' - ')

The website looks like a real store where you can put items in your cart and buy them. But instead of going through the usual checkout process, I'm experimenting with changing how the payment system works, particularly the Stripe API. So, for now, you can just add things to your cart and pay without going through the usual checkout steps.

In order to access the admin panel on "/admin" you need to provide the admin email and password.

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental(.env) variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URI: Here paste the connection string of your MongoDB Atlas database or Mongo db compass localhost string.

- SESSION_SECRET: A secret message for the session. You can use any string here.

- STRIPE_PRIVATE_KEY: NOTE:It won't work until I update the Stripe API, which I'm currently working on.( if you know you can raise issue & if you fixed it you can try to push.
- GMAIL_EMAIL, GMAIL_PASSWORD: the email and password given to nodemailer to send/receive the email. Please put a real email and password here because you will receive the messages sent from the contact us form on this email.(still facing issue while contacting)

- ADMIN_EMAIL, ADMIN_PASSWORD: The email and password used to log into the admin panel using AdminBro. You can put any email and password here.

- ADMIN_COOKIE_NAME, ADMIN_COOKIE_PASSWORD: the cookie name and password used in the AdminBro authentication method. You can put any strings here.

"After you've put these settings in the .env file at the project's main folder, go to the 'seedDB' folder and run 'node category-seed.js' and 'node products-seed.js' to fill your empty MongoDB database."(prefilled with some of images and faker )

Now, just type "npm start" in the terminal, and the app will run.

## Technology

The application is built with:

- Node.js version 12.16.3
- MongoDB version 4.2.0
- Express version 4.16.1
- Bootstrap version 4.4.1
- FontAwesome version 5.13.0
- Stripe API v3: used for payment in the checkout page( need to update so i bypassed it till the fix)
- Mapbox API: used to show the map in the about us page
- AdminBro: used and customized to implement the admin panel (Need to update this also)
- Nodemailer: used to send emails from the contact us form
- Passport: used for authentication
- Express Validator: used for form validation

## Features

This app is like an online store for virtual bags, showing products and how to reach out.

Users can:

- Sign up, log in, or log out
- Look through products added by the admin
- Add or remove products from the shopping cart
- See what's in their shopping cart
- To buy, users need to log in
- Pay for their purchase with Stripe, which sends the payment to the admin
- Check their order history in their profile

Admins can:

- Log in or out of the admin panel
- See and manage all the data in the database. They can view, add, edit, or delete orders, users, products, and categories. Admins can't change the cart because it's either handled by the user before buying or deleted after.

## Database

All the data structures are in the models directory, using mongoose.

### User:

- Username (text)
- Email (text)
- Password (text)

### Category:

- Name (text)
- Slug (text)

### Product:

- Product Code (text)
- Name (text)
- Image Path (text)
- Description (text)
- Price (number)
- Category (reference to category)
- Manufacturer (text)
- Availability (boolean)
- Creation Date (date)

### Cart:

- Items: a list of objects, each with:
  - Product ID (reference to product)
  - Quantity (number)
  - Price (number)
  - Name (text)
  - Product Code (number)
- Total Quantity (number)
- Total Cost (number)
- User (reference to user)
- Creation Date

### Order:

- User (reference to user)
- Cart (a copy of the cart structure, not a reference, for display purposes)
- Address (text)
- Payment ID (text)
- Creation Date (date)
- Delivery Status (boolean)

**Note: The repetition of title, price, and product code in the cart is due to the limitations of AdminBro. If using a custom admin interface, this repetition could be avoided.
