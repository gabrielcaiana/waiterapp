import { Router } from 'express';
import {
  getOrders,
  createOrder,
  updateOrderById,
  deleteOrderById,
} from '@/controllers/ordersController';

const router = Router();

router.get('/orders', getOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', updateOrderById);
router.delete('/orders/:orderId', deleteOrderById);

export default router;
