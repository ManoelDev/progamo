import Categories from '@database/entities/Categories';
import CategoryRepository from '../repositories/CategoryRepository';

interface Request {
  name: string;
  description?: string;
}
export default class CreaeteCategoryService {
  private categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  public async execute({ name, description }: Request): Promise<Categories> {
    const findCategory = await this.categoryRepository.findByName(name);
    if (findCategory) return findCategory;
    const category = await this.categoryRepository.create({ name, description });
    return category;
  }
}
