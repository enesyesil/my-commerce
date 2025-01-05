# E-Commerce Platform

A modern, fully functional e-commerce platform that enables customers to browse products, manage a shopping cart, and complete orders. The platform features robust role-based access control, separating customer functionalities from administrative operations.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture Overview](#architecture-overview)
- [Installation and Usage](#installation-and-usage)
- [APIs](#apis)
- [Deployment](#deployment)
- [Contributors](#contributors)

---

## Features

### Customer Features:
- **User Registration and Login:** Secure user authentication using JWT tokens.
- **Catalog Browsing:**
  - Filter products by categories, brands, and models.
  - Sort products by price or name.
- **Shopping Cart Management:**
  - Add, update, or remove products from the cart.
  - Cart persistence across user sessions.
- **Checkout Process:**
  - Securely provide payment and shipping information.
  - View order summaries and receive purchase confirmations.

### Administrator Features:
- **Inventory Management:**
  - Add, update, and delete products.
  - Track stock levels in real-time.
- **Sales Analytics:**
  - Generate sales reports and view transaction history.
- **User Management:**
  - Modify customer profiles and view purchase histories.

---

## Technologies Used

### Frontend:
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Backend:
- **Framework:** Node.js with Express.js
- **Architecture:** MVC Pattern
- **Database Layer:** DAO Design Pattern
- **Deployment:** DigitalOcean

### Database:
- **System:** PostgreSQL
- **Hosting:** Vercel

---

## Architecture Overview

The application is built using a multi-tier MVC architecture, ensuring a clear separation of concerns:

1. **Frontend:**
   - Built with Next.js for dynamic routing and server-side rendering.
   - Styled with Tailwind CSS for a responsive, modern UI.

2. **Backend:**
   - Node.js and Express.js handle APIs and business logic.
   - RESTful APIs facilitate communication between the frontend and backend.

3. **Database:**
   - PostgreSQL manages persistent data storage.
   - DAO design pattern ensures secure and modular database operations.

### Architecture Flow:
1. User browses products.
   - Request sent to the backend API.
   - Products fetched from the database.
   - Response rendered on the frontend.
2. User places an order.
   - Backend validates stock levels.
   - Database updates inventory.
   - Confirmation sent to the user.

### Diagrams

#### Sequence Diagram:
![Sequence Diagram](./Screenshot%202024-12-23%20at%2012.07.25%20PM.png)

#### API Structure:
![API Structure](./Screenshot%202024-12-23%20at%2012.24.10%20PM.png)

#### System Architecture:
![System Architecture](./Screenshot%202024-12-23%20at%2012.21.26%20PM.png)

#### Database Schema:
![Database Schema](./Screenshot%202024-12-23%20at%2012.17.21%20PM.png)

---

## Installation and Usage

### Prerequisites:
- Node.js installed on your machine.
- PostgreSQL database setup.

### Steps:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/enesyesil/ecom-backend.git
   git clone https://github.com/enesyesil/my-commerce/tree/main/my-commerce-frontend.git
   ```

2. **Install Dependencies:**
   ```bash
   cd ecom-backend
   npm install
   cd ../my-commerce-frontend
   npm install
   ```

3. **Setup Environment Variables:**
   - Configure `.env` files for both backend and frontend:
     - Backend `.env`:
       ```
       DB_HOST=<your-database-host>
       DB_PORT=<your-database-port>
       DB_USER=<your-database-user>
       DB_PASS=<your-database-password>
       ```
     - Frontend `.env`:
       ```
       NEXT_PUBLIC_API_URL=<your-backend-api-url>
       ```

4. **Run the Applications:**
   - Backend:
     ```bash
     npm start
     ```
   - Frontend:
     ```bash
     npm run dev
     ```

5. **Access the Platform:**
   - Frontend available at `http://localhost:3000`
   - Backend available at `http://localhost:5000`

---

## APIs

### Authentication
- `POST /auth/login` - Log in a user.
- `POST /auth/register` - Register a new user.
- `POST /auth/logout` - Log out a user.

### Catalog
- `GET /catalog` - Fetch all products with optional filters.
- `GET /catalog/:id` - Retrieve details of a specific product.

### Shopping Cart
- `GET /cart` - Get current cart items.
- `POST /cart/add` - Add a product to the cart.
- `PUT /cart/:id` - Update product quantity in the cart.
- `DELETE /cart/remove/:id` - Remove a product from the cart.

### Orders
- `POST /order` - Place a new order.
- `GET /order/history` - Fetch past orders for an authenticated user.

### Admin
- `PUT /admin/inventory/:productId` - Update inventory for a product.
- `POST /admin/products` - Add a new product.
- `DELETE /admin/products/:id` - Remove a product from inventory.

---

## Deployment

### Frontend:
- Deployed on Vercel for fast and seamless CI/CD integration.
- [Frontend Live Demo](https://my-commerce-frontend.vercel.app)

### Backend:
- Deployed on DigitalOcean for scalable backend hosting.
- [Backend API Endpoint](https://ecom-api-npeki.ondigitalocean.app)

---

## Contributors

- **Enes Yesil** - Sole developer managing all aspects of the project.

---

Feel free to contribute to the project or report issues via GitHub!
