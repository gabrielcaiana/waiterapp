import { categoriesRepository } from '@/repositories/categoriesRepository';
import { NotFoundError, BadRequestError } from '@/errors';

export class CategoriesService {
  private repository = new categoriesRepository();

  async getAllCategories() {
    const categories = await this.repository.getAll();
    if (!categories || categories.length === 0) {
      throw new NotFoundError('No categories found');
    }
    return categories;
  }

  async createCategory(name: string, icon: string) {
    const category = await this.repository.create(name, icon);
    if (!category) {
      throw new BadRequestError('Error creating category');
    }
    return category;
  }
}
