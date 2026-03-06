import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { PasswordService } from '../../domain/services/password.service';
import { RegisterDto } from '../../transport/dto/register.dto';
import { User } from '../../domain/entities/user.entity';
import type { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { USER_REPOSITORY } from '../../domain/repositories/user.repository.interface';

@Injectable()
export class RegisterUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    private readonly passwordService: PasswordService,
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
