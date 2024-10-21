import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

export class UserUseCase {
  constructor(private  userRepository: IUserRepository) {
    //
  }
  async save(user: User): Promise<User | null> {
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async findById(userId: number): Promise<User | null> {
    return this.userRepository.findById(userId);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async update(user: User): Promise<User | null> {
    return this.userRepository.update(user);
  }

  async delete(userId: number): Promise<User | null> {
    return this.userRepository.delete(userId);
  }
}
