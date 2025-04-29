import { Request, Response, NextFunction } from 'express';
import { OrdersService } from '@/services/ordersService';
import {
  ordersSchema,
  orderStatusSchema,
  orderIdSchema,
} from '@/schemas/ordersSchema';

const ordersService = new OrdersService();

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orders = await ordersService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { table, products } = ordersSchema.parse(req.body);
    const order = await ordersService.createOrder({ table, products });
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { orderId } = req.params;
    const { status } = orderStatusSchema.parse(req.body);
    const order = await ordersService.updateOrderStatus(orderId, status);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { orderId } = orderIdSchema.parse(req.params);
    const order = await ordersService.deleteOrderById(orderId);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
