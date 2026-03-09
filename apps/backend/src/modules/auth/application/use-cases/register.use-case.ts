import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { RegisterDto } from '../../transport/dto/register.dto';
import { User } from '../../domain/entities/user.entity';
import type { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { USER_REPOSITORY } from '../../domain/repositories/user.repository.interface';
import {
  type IPasswordService,
  PASSWORD_SERVICE,
} from '@modules/auth/domain/services/password-service.interface';

@Injectable()
export class RegisterUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject(PASSWORD_SERVICE)
    private readonly passwordService: IPasswordService,
  ) {}

  async execute(dto: RegisterDto): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const passwordHash = await this.passwordService.hash(dto.password);

    return this.userRepository.create({
      email: dto.email,
      name: dto.name,
      passwordHash,
    });
  }
}
