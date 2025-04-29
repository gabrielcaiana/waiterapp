import { z } from 'zod';

export const ordersSchema = z.object({
  table: z.string({
    required_error: 'Table is required',
    invalid_type_error: 'Table must be a string',
  }),
  status: z.enum(['WAITING', 'IN_PRODUCTION', 'DONE']).optional(),
  createdAt: z.date().optional(),
  products: z.array(
    z.object({
      product: z.string({
        required_error: 'Product is required',
        invalid_type_error: 'Product must be a string',
      }),
      quantity: z.number({
        required_error: 'Quantity is required',
        invalid_type_error: 'Quantity must be a number',
      }),
    }),
  ),
});

export const orderStatusSchema = z.object({
  status: z.enum(['WAITING', 'IN_PRODUCTION', 'DONE']),
});

export const orderIdSchema = z.object({
  orderId: z.string({
    required_error: 'OrderId is required',
    invalid_type_error: 'OrderId must be a string',
  }),
});

export type Order = z.infer<typeof ordersSchema>;
export type OrderStatus = z.infer<typeof ordersSchema>['status'];
