import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config({ path: `.env` });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000)
  // await app.listen(3000);
  console.log(`Running Server on http://localhost:${process.env.PORT}/`)
}
bootstrap();
