# E-Commerce Application

This is a dynamic e-commerce application built using React, Redux, and Tailwind CSS; enabling users to browse products and manage their shopping cart.

## Table of Contents

- [E-Commerce Application](#e-commerce-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Live Demo](#live-demo)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
  - [Usage](#usage)
    - [Run the Application](#run-the-application)
    - [Build for Production](#build-for-production)
  - [Project Structure](#project-structure)
  - [License](#license)
## Introduction

This e-commerce application provides users with the ability to:

- Browse through a catalog of products
- Add items to a shopping cart
- Remove items from shopping cart
- See the total price and updates in real time as they modify their cart

## Live Demo
Check out the live demo of the application [here](https://hasantohidul-e-commerce-app.netlify.app/).

## Features

- **Product Catalog:** Displays a list of available products fetched from mock data.
- **Shopping Cart:** Users can add and remove products from their cart.
- **Real-Time Cart Updates:** Automatically updates product quantities and total price in the cart.
- **State Management:** Uses **Redux Toolkit** for central state management (cart, products).
- **Responsive Design:** Ensures the app is fully responsive on all screen sizes using **Tailwind CSS**.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Redux Toolkit:** For managing global state (product and cart data).
- **Tailwind CSS:** Utility first CSS framework for quick and scalable styling
- **JavaScript(ES6+):** Core programming language used for building the application

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v-14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/hasantohidul/e-commerce-app.git
cd e-commerce-app
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

## Usage

### Run the Application

To run the app in development mode:

```bash
npm start
```

Or:

```bash
yarn start
```

The Application will be available at `http://localhost:3000`.

### Build for Production

To Create a production build:

```bash
npm run build
```

Or:

```bash
yarn build
```

## Project Structure
```bash
e-commerce-app
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── App.js
│   ├── App.css
│   ├── assets/
│   ├── components/
│   │   └── ProductCard.js
│   ├── hooks/
│   ├── index.js
│   ├── index.css
│   ├── mockData.js
│   ├── pages/
│   │   ├── Cart.js
│   │   └── ProductList.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   └── productSlice.js
│   ├── styles/
│   ├── reportWebVitals.js
│   └── setupTests.js
├── tailwind.config.js
└── .prettierrc
```

## License
This project is licensed under the MIT License.