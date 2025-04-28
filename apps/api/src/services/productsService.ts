import { productsRepository } from '@/repositories/productsRepository';
import { NotFoundError, BadRequestError } from '@/errors';

export class ProductsService {
  private repository = new productsRepository();

  async getAllProducts() {
    const products = await this.repository.getAll();
    return products;
  }

  async getProductByCategoryId(categoryId: number) {
    const products = await this.repository.getProductByCategoryId(categoryId);
    if (!products || products.length === 0) {
      throw new NotFoundError(
        `No products found for this category id: ${categoryId}`,
      );
    }
    return products;
  }

  async createProduct(
    name: string,
    category: string,
    description: string,
    imagePath: string,
    ingredients: string,
    price: number,
  ) {
    const product = await this.repository.create(
      name,
      category,
      description,
      imagePath,
      ingredients,
      price,
    );
    if (!product) {
      throw new BadRequestError('Error creating product');
    }
    return product;
  }
}
