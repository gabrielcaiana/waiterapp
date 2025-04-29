import { Router } from 'express';
import {
  getOrders,
  createOrder,
  updateOrderById,
  deleteOrderById,
} from '@/controllers/ordersController';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:orderId', updateOrderById);
router.delete('/:orderId', deleteOrderById);

export default router;
