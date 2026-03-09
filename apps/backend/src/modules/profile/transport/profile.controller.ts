import { Controller, Get, Patch, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import {
  GetProfileUseCase,
  UpdateProfileUseCase,
} from '../application/use-cases';
import { CurrentUser } from '@common/decorators';
import { UpdateProfileDto } from './dto/update-profile.dto';

@ApiBearerAuth('bearer')
@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly getProfile: GetProfileUseCase,
    private readonly updateProfile: UpdateProfileUseCase,
  ) {}

  @ApiOperation({
    summary: 'Get current user profile (dietary preferences, etc.)',
  })
  @Get()
  async get(@CurrentUser() userId: string) {
    return this.getProfile.execute(userId);
  }

  @ApiOperation({ summary: 'Update user profile preferences' })
  @Patch()
  async update(@CurrentUser() userId: string, @Body() data: UpdateProfileDto) {
    return this.updateProfile.execute(userId, data);
  }
}
