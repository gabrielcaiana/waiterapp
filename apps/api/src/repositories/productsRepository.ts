import { ProductEntity } from '@/entities/Product';
import { Product } from '@/models/Product';

export class productsRepository {
  async getAll() {
    const products = await Product.find();
    return products;
  }

  async create({
    name,
    category,
    description,
    imagePath,
    ingredients,
    price,
  }: ProductEntity) {
    const product = await Product.create({
      name,
      category,
      description,
      imagePath,
      ingredients,
      price,
    });
    return product;
  }
}
