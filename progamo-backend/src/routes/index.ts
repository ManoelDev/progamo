import { Router } from 'express';
import userRoutes from '@modules/users/routes/UsersRoutes';
import sessionRoutes from '@modules/users/routes/SessionRoutes';
import categoriesRoutes from '@modules/categories/routes/CategoriesRoutes';
import forgotPasswordRoutes from '@modules/users/routes/ForgorPasswordRoutes';

const routes = Router();
const prefixV1 = '/v1';

routes.use(`${prefixV1}`, userRoutes);
routes.use(`${prefixV1}`, sessionRoutes);
routes.use(`${prefixV1}`, categoriesRoutes);
routes.use(`${prefixV1}`, forgotPasswordRoutes);

export default routes;
