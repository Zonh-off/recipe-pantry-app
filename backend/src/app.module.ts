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
  ],
  controllers: [HealthController],
})
export class AppModule { }
