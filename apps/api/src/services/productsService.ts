import { productsRepository } from '@/repositories/productsRepository';
import { BadRequestError } from '@/errors';
import { ProductEntity } from '@/entities/Product';

export class ProductsService {
  private repository = new productsRepository();

  async getAllProducts() {
    const products = await this.repository.getAll();
    return products;
  }

  async createProduct({
    name,
    description,
    category,
    imagePath,
    ingredients,
    price,
  }: ProductEntity) {
    const product = await this.repository.create({
      name,
      description,
      category,
      imagePath,
      ingredients,
      price,
    });
    if (!product) {
      throw new BadRequestError('Error creating product');
    }
    return product;
  }
}
