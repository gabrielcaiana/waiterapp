import { Router } from 'express';
import {
  getProducts,
  createProduct,
  getProductByCategoryId,
} from '@/controllers/productsController';
import { upload } from '@/middlewares/upload';

const router = Router();

router.get('/', getProducts);
router.get('/:categoryId/products', getProductByCategoryId);
router.post('/', upload.single('image'), createProduct);

export default router;
