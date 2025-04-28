import { Router } from 'express';
import {
  getCategories,
  createCategory,
} from '@/controllers/categoriesController';

const router = Router();

router.get('/', getCategories);
router.post('/', createCategory);

export default router;
