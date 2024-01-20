import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
// import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const config = new DocumentBuilder()
    .setTitle('FAMS API')
    .setDescription('FAMS API description')
    .setVersion('1.0')
    .addTag('students')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api-docs', app, document)

  app.enableCors()

  // app.useStaticAssets(join(__dirname, '..', '/public'))

  // app.setGlobalPrefix('v1')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )

  await app.listen(3000)
}
bootstrap()
