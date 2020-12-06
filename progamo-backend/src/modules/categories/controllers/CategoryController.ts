import { Request, Response } from 'express';
import CategoryRepository from '../repositories/CategoryRepository';
import CreaeteCategoryService from '../services/CreateCategoryService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const categoryRepository = new CategoryRepository();
    const careteCategory = new CreaeteCategoryService(categoryRepository);

    const category = await careteCategory.execute({ name, description });

    return response.json(category);
  }
}
