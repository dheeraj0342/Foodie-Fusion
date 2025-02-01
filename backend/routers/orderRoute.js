import express from 'express';
import authMiddeleware from '../middlewares/authMiddleware.js';
import { listOrders, userOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get("/list",listOrders);
orderRouter.get("/userorders",authMiddeleware,userOrders);
