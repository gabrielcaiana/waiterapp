import { Request, Response, NextFunction } from 'express';
import { ItemService } from '@/services/itemService';

const itemService = new ItemService();

export const createItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const newItem = itemService.createItem(name);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = itemService.getAllItems();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const getItemById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = itemService.getItemById(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const updateItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const updatedItem = itemService.updateItem(id, name);
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedItem = itemService.deleteItem(id);
    res.json(deletedItem);
  } catch (error) {
    next(error);
  }
};
