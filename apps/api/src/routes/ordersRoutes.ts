import { Router } from 'express';
import {
  getOrders,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} from '@/controllers/ordersController';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:orderId', updateOrderStatus);
router.delete('/:orderId', deleteOrder);

export default router;
