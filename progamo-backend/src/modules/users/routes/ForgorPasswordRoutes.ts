import { Router } from 'express';
import ForgotPasswordController from '@modules/users/controllers/ForgotPasswordController';

const forgotPasswordRoutes = Router();

const forgotPasswordController = new ForgotPasswordController();

forgotPasswordRoutes.post('/recover', forgotPasswordController.create);

export default forgotPasswordRoutes;
