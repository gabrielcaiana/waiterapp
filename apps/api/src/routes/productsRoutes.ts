import { Router } from 'express';
import {
  getProducts,
  createProduct,
  getProductByCategoryId,
} from '@/controllers/productsController';

const router = Router();

router.get('/', getProducts);
router.get('/:categoryId/products', getProductByCategoryId);
router.post('/', createProduct);

export default router;
