import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './modules/test.module';
import { WebModule } from './modules/web.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TestModule,
    WebModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
