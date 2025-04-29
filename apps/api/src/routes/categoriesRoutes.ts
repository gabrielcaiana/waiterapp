import { Router } from 'express';
import {
  getCategories,
  createCategory,
  getProductByCategoryId,
} from '@/controllers/categoriesController';

const router = Router();

router.get('/', getCategories);
router.get('/:categoryId/products', getProductByCategoryId);
router.post('/', createCategory);

export default router;
