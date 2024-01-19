import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as cors from 'cors'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('FAMS API')
    .setDescription('FAMS API description')
    .setVersion('1.0')
    .addTag('students')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api-docs', app, document)

  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )

  await app.listen(3000)
}
bootstrap()
