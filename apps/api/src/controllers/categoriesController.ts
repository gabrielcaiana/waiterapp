import { Request, Response, NextFunction } from 'express';
import { CategoriesService } from '@/services/categoriesService';
import {
  createCategorySchema,
  categoryIdSchema,
} from '@/schemas/categorySchema';

const categoriesService = new CategoriesService();

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const categories = await categoriesService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const getProductByCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const categoryId = categoryIdSchema.parse(req.params.categoryId);
    const products = await categoriesService.getProdutByCategoryId(categoryId);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, icon } = createCategorySchema.parse(req.body);
    const category = await categoriesService.createCategory({
      name,
      icon,
    });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};
