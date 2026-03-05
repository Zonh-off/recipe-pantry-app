import { Controller, Get, Patch, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { GetProfileUseCase } from '../application/use-cases/get-profile.use-case';
import { UpdateProfileUseCase } from '../application/use-cases/update-profile.use-case';
import { UpdateProfileDto } from './dto/update-profile.dto';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
    constructor(
        private readonly getProfile: GetProfileUseCase,
        private readonly updateProfile: UpdateProfileUseCase,
    ) { }

    @ApiOperation({ summary: 'Get current user profile (dietary preferences, etc.)' })
    @Get()
    async get() {
        const userId = 'dev-user-001'; // TODO: replace with auth req user
        return this.getProfile.execute(userId);
    }

    @ApiOperation({ summary: 'Update user profile preferences' })
    @Patch()
    async update(@Body() data: UpdateProfileDto) {
        const userId = 'dev-user-001'; // TODO: replace with auth req user
        return this.updateProfile.execute(userId, data);
    }
}
