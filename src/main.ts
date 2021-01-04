import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true },
  );

  const options = new DocumentBuilder()
    .setTitle('DPaulaCont')
    .setDescription('Descrição - DPaulaCont API ')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, process.env.HOST || '0.0.0.0', () => {
    console.log(`Our app is running on port ${PORT}`);
  });
}

bootstrap();
