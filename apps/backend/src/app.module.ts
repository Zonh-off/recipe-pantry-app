import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './shared/config/env.validation';
import { PantryModule } from './modules/pantry/pantry.module';
import { HealthController } from './modules/health/controllers/health.controller';
import { RecipesModule } from './modules/recipes/recipes.module';
import { CollectionsModule } from './modules/collections/collections.module';
import { ProfileModule } from './modules/profile/profile.module';
import { DatabaseModule } from './shared/database/database.module';
import { GroceryModule } from './modules/grocery/grocery.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateEnv,
      isGlobal: true,
    }),
    PantryModule,
    RecipesModule,
    CollectionsModule,
    ProfileModule,
    DatabaseModule,
    GroceryModule,
    AuthModule,
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
