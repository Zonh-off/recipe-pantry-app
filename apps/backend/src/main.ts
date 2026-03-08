import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  // Global settings
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const configService = app.get(ConfigService);
  const frontendUrl =
    configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';

  // CORS for frontend
  app.enableCors({
    origin: [frontendUrl],
    credentials: true,
  });

  // Graceful shutdown
  app.enableShutdownHooks();

  const config = new DocumentBuilder()
    .setTitle('Recipe Pantry API')
    .setDescription('API for Recipe Pantry App')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'bearer',
    )
    .build();

  app.use(cookieParser());

  const document = SwaggerModule.createDocument(app, config);
  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('docs', app, document);
  }

  const port = configService.get<number>('PORT') || 3001;

  await app.listen(port);

  logger.log(`🚀 Server is running on: http://localhost:${port}/v1`);
  logger.log(`🩺 Health check: http://localhost:${port}/v1/health`);
  logger.log(`🩺 Docs: http://localhost:${port}/docs`);
  logger.log(`[Recipes] provider mode: ${process.env.RECIPES_PROVIDER_MODE}`);
}
bootstrap();
