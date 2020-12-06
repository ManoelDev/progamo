import { getRepository, Repository } from 'typeorm';
import Categories from '@database/entities/Categories';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import ICreateCategory from './ICategoryRepository';

export default class CategoryRepository implements ICreateCategory {
  private ormRepository: Repository<Categories>;

  constructor() {
    this.ormRepository = getRepository(Categories);
  }

  public async findByName(name: string): Promise<Categories | undefined> {
    const findCategoryName = await this.ormRepository.findOne({ where: { name } });
    return findCategoryName;
  }

  public async findById(id: string): Promise<Categories | undefined> {
    const findCategoryId = await this.ormRepository.findOne({ where: { id } });
    return findCategoryId;
  }

  public async create({ name, description }: ICreateCategoryDTO): Promise<Categories> {
    const category = await this.ormRepository.create({ name, description });
    await this.ormRepository.save(category);
    return category;
  }

  public async save(category: Categories): Promise<Categories> {
    return this.ormRepository.save(category);
  }
}
