import { Product } from '@/models/Product';

export class productsRepository {
  async getAll() {
    const products = await Product.find();
    return products;
  }
  async getProductByCategoryId(categoryId: number) {
    const products = await Product.find({
      where: {
        id: categoryId,
      },
      relations: {
        products: true,
      },
    });
    return products;
  }
  async create(
    name: string,
    category: string,
    description: string,
    imagePath: string,
    ingredients: string,
    price: number,
  ) {
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
