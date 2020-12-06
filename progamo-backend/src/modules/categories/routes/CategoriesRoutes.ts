import { Router } from 'express';
import CategoriesControllers from '../controllers/CategoryController';

const categoriesRoutes = Router();
const categoryController = new CategoriesControllers();

categoriesRoutes.post('/category', categoryController.create);

export default categoriesRoutes;
