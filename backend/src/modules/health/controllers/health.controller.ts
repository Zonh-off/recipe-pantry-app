import { Controller, Get } from '@nestjs/common';

import { Public } from '../../../shared/decorators/public.decorator';

@Public()
@Controller('health')
export class HealthController {
  @Get('live')
  getLive() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  @Get('ready')
  getReady() {
    // Simple readiness check
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
