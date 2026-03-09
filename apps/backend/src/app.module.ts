import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PantryModule } from '@modules/pantry/pantry.module';
import { RecipesModule } from '@modules/recipes/recipes.module';
import { CollectionsModule } from '@modules/collections/collections.module';
import { ProfileModule } from '@modules/profile/profile.module';
import { DatabaseModule } from '@core/database/database.module';
import { GroceryModule } from '@modules/grocery/grocery.module';
import { AuthModule } from '@modules/auth/auth.module';
import { HealthController } from '@modules/health/controllers/health.controller';
import { validateEnv } from '@common/config';
import { JwtAuthGuard } from '@common/guards';

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
