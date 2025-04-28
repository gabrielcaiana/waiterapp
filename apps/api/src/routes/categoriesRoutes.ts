import { Router } from 'express';
import {
  getCategories,
  createCategory,
  getProductsByCategory,
} from '@/controllers/categoriesController';

const router = Router();

router.get('/', getCategories);
router.post('/', createCategory);
router.get('/:categoryId/products', getProductsByCategory);

export default router;
