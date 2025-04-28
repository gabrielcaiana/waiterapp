import { CategoryEntity } from './../entities/Category';
import { Category } from '@/models/Category';

export class categoriesRepository {
  async getAll() {
    const categories = await Category.find();
    return categories;
  }
  async getProductByCategoryId(categoryId: number) {
    const categories = await Category.find({
      where: {
        id: categoryId,
      },
      relations: {
        products: true,
      },
    });
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
