import { Test, TestingModule } from '@nestjs/testing';
import { RegisterUseCase } from '../../../../../../src/modules/auth/application/use-cases/register.use-case';
import { PasswordService } from '../../../../../../src/modules/auth/domain/services/password.service';
import { USER_REPOSITORY, IUserRepository } from '../../../../../../src/modules/auth/domain/repositories/user.repository.interface';
import { RegisterDto } from '../../../../../../src/modules/auth/transport/dto/register.dto';
import { User } from '../../../../../../src/modules/auth/domain/entities/user.entity';
import { ConflictException } from '@nestjs/common';

describe('RegisterUseCase', () => {
    let useCase: RegisterUseCase;
    let userRepository: jest.Mocked<IUserRepository>;
    let passwordService: jest.Mocked<PasswordService>;

    beforeEach(async () => {
        userRepository = {
            findByEmail: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
        } as unknown as jest.Mocked<IUserRepository>;

        passwordService = {
            hash: jest.fn(),
            compare: jest.fn(),
        } as unknown as jest.Mocked<PasswordService>;

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RegisterUseCase,
                { provide: USER_REPOSITORY, useValue: userRepository },
                { provide: PasswordService, useValue: passwordService },
            ],
        }).compile();

        useCase = module.get<RegisterUseCase>(RegisterUseCase);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('execute', () => {
        const dto: RegisterDto = {
            email: 'test@example.com',
            password: 'password123',
            name: 'Test User',
        };

        it('should successfully register a user', async () => {
            const user = new User('1', dto.email, 'hashed_password', dto.name);
            userRepository.findByEmail.mockResolvedValue(null);
            passwordService.hash.mockResolvedValue('hashed_password');
            userRepository.create.mockResolvedValue(user);

            const result = await useCase.execute(dto);

            expect(userRepository.findByEmail).toHaveBeenCalledWith(dto.email);
            expect(passwordService.hash).toHaveBeenCalledWith(dto.password);
            expect(userRepository.create).toHaveBeenCalledWith({
                email: dto.email,
                name: dto.name,
                passwordHash: 'hashed_password',
            });
            expect(result).toEqual(user);
        });

        it('should throw ConflictException if email is already in use', async () => {
            const user = new User('1', dto.email, 'hashed_password', dto.name);
            userRepository.findByEmail.mockResolvedValue(user);

            await expect(useCase.execute(dto)).rejects.toThrow(ConflictException);

            expect(userRepository.findByEmail).toHaveBeenCalledWith(dto.email);
            expect(passwordService.hash).not.toHaveBeenCalled();
            expect(userRepository.create).not.toHaveBeenCalled();
        });
    });
});
