import { OrderEntity } from '@/entities/Order';
import { BadRequestError } from '@/errors';
import { ordersRepository } from '@/repositories/ordersRepository';

export class OrdersService {
  private orders = new ordersRepository();

  async getAllOrders() {
    const orders = await this.orders.getAll();
    return orders;
  }

  async createOrder({ table, products }: OrderEntity) {
    const order = await this.orders.create({
      table,
      products,
    });

    if (!order) {
      throw new BadRequestError('Error creating order');
    }

    return order;
  }

  async updateOrderStatus(orderId: string, status: OrderEntity['status']) {
    const updatedOrder = await this.orders.updateOrderStatus(orderId, status);
    if (!updatedOrder) {
      throw new BadRequestError('Error updating order');
    }
    return updatedOrder;
  }

  async deleteOrderById(id: string) {
    const deletedOrder = await this.orders.deleteOrder(id);
    if (!deletedOrder) {
      throw new BadRequestError('Error deleting order');
    }
    return deletedOrder;
  }
}
