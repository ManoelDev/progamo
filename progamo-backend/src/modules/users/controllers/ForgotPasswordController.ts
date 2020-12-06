import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import ForgotPasswordService from '../services/ForgotPasswordService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const userRepository = new UserRepository();
    const forgotPassword = new ForgotPasswordService(userRepository);

    await forgotPassword.execute(email);

    return response.status(204).json();
  }
}
