import { Module } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';

@Module({
  providers: [
    {
      provide: 'ICacheService',
      useClass: RedisCacheService,
    },
  ],
  exports: ['ICacheService'],
})
export class CacheModule {}
