import { CategoryEntity } from './../entities/Category';
import { Product } from '@/models/Product';
import { Category } from '@/models/Category';

export class categoriesRepository {
  async getAll() {
    const categories = await Category.find();
    return categories;
  }
  async getProductByCategoryId(categoryId: string) {
    const categories = await Product.find()
      .where('category')
      .equals(categoryId);
    return categories;
  }
  async create({ name, icon }: CategoryEntity) {
    const category = await Category.create({
      name,
      icon,
    });
    return category;
  }
}
