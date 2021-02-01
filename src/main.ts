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
  const HOST = process.env.HOST || '0.0.0.0';
  await app.listen(3000, '0.0.0.0');
  // await app.listen(PORT, HOST, (error) => {
  //   console.log(error);
  //   console.log(`Our app is running on port ${PORT}`);
  // });
}

bootstrap();
