import { CategoryEntity } from './../entities/Category';
import { categoriesRepository } from '@/repositories/categoriesRepository';
import { NotFoundError, BadRequestError } from '@/errors';

export class CategoriesService {
  private repository = new categoriesRepository();

  async getAllCategories() {
    const categories = await this.repository.getAll();
    return categories;
  }

  async createCategory({ name, icon }: CategoryEntity) {
    const category = await this.repository.create({
      name,
      icon,
    });
    if (!category) {
      throw new BadRequestError('Error creating category');
    }
    return category;
  }
}
