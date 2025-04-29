import { Request, Response, NextFunction } from 'express';

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send('createProduct');
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send('getProducts');
};

export const updateOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send('updateProductById');
};

export const deleteOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send('deleteProductById');
};
