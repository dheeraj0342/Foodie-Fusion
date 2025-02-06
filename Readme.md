# Full-Stack E-Commerce Application

## Overview
This is a full-stack e-commerce platform with a **React-based responsive frontend**, a **Node.js + Express.js backend**, and **MongoDB** as the database. The application supports **user authentication, menu management, cart functionality, secure payment gateway integration**, and order processing.

## Features
- **User Authentication**: Sign-up, login, and authentication using JWT.
- **Menu Management**: Admin can add, edit, and delete menu items.
- **Cart Functionality**: Users can add and remove items from the cart.
- **Secure Payments**: Integrated with a payment gateway (e.g., Stripe, Razorpay, or PayPal).
- **Order Management**: Track orders, view order history, and manage order status.
- **Responsive Design**: Fully mobile-friendly UI using React.

## Tech Stack
### Frontend:
- React.js
- Redux Toolkit (for state management)
- Tailwind CSS / Material-UI (for styling)

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- JSON Web Tokens (JWT) for authentication

### Deployment:
- Frontend: Vercel / Netlify
- Backend: Heroku / AWS / Digital Ocean
- Database: MongoDB Atlas

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (>=16.x)
- MongoDB (local or Atlas)
- Git

### Steps to Run Locally

#### 1. Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

#### 2. Install Dependencies
##### Install Backend Dependencies
```sh
cd backend
npm install
```
##### Install Frontend Dependencies
```sh
cd ../frontend
npm install
```

#### 3. Set Up Environment Variables
Create a `.env` file in the `backend` directory and add:
```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PAYMENT_GATEWAY_KEY=your-payment-gateway-key
```

#### 4. Start the Application
##### Start Backend Server
```sh
cd backend
npm start
```
##### Start Frontend Server
```sh
cd ../frontend
npm start
```

The frontend will be available at `http://localhost:3000` and backend at `http://localhost:5000`.

## API Endpoints
### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (Protected)

### Menu Routes
- `GET /api/menu` - Get all menu items
- `POST /api/menu` - Add a new menu item (Admin only)

### Cart Routes
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/remove/:id` - Remove item from cart

### Order Routes
- `POST /api/orders` - Place an order
- `GET /api/orders` - Get all orders (Admin only)

## Contribution
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any issues or suggestions, reach out to [your-email@example.com] or create an issue in the repository.
