import { OrderEntity } from './../entities/Order';
import { Order } from '@/models/Order';

export class ordersRepository {
  async getAll() {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');
    return orders;
  }

  async create({ table, products }: OrderEntity) {
    const order = await Order.create({ table, products });
    return order;
  }

  async updateOrderStatus(orderId: string, status: OrderEntity['status']) {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true },
    );
    return order;
  }

  async deleteOrder(orderId: string) {
    const order = await Order.findByIdAndDelete(orderId);
    return order;
  }
}
