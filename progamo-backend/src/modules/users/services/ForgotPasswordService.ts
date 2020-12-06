import AppError from '@providers/errors/AppError';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

export default class ForgotPasswordService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(email: string): Promise<void> {
    const findEmail = await this.userRepository.findByEmail(email);
    if (!findEmail) throw new AppError('User not exist.');
  }
}
