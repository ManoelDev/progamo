import Categories from '@database/entities/Categories';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

export default interface ICreateCategory {
  findByName(name: string): Promise<Categories | undefined>;
  findById(id: string): Promise<Categories | undefined>;
  create(createUserDTO: ICreateCategoryDTO): Promise<Categories>;
  save(category: Categories): Promise<Categories>;
}
