import { Request, Response, NextFunction } from 'express';
import { ProductsService } from '@/services/productsService';
import { productSchema } from '@/schemas/productSchema';
const productsService = new ProductsService();

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, description, price, ingredients, category } = req.body;
    const imagePath = (req.file as Express.Multer.File)?.path || '';

    const payload = {
      name,
      description,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category,
      imagePath,
    };

    const validatedProduct = productSchema.parse(payload);
    const product = await productsService.createProduct(validatedProduct);

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
