import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

export default class UpdatePasswordService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
}
