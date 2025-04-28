import { Router } from 'express';
import {
  getCategories,
  createCategory,
  getProductsByCategory,
} from '@/controllers/categoriesController';

const router = Router();

router.get('/categories', getCategories);
router.post('/categories', createCategory);
router.get('/categories/:categoryId/products', getProductsByCategory);

export default router;
