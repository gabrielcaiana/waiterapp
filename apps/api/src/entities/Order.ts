export interface OrderEntity {
  id?: string;
  table: string;
  status?: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  createdAt?: Date;
  products: {
    product: string;
    quantity: number;
  }[];
}
