import { Router } from 'express';
import { getProducts, createProduct } from '@/controllers/productsController';
import { upload } from '@/middlewares/upload';

const router = Router();

router.get('/', getProducts);
router.post('/', upload.single('image'), createProduct);

export default router;
