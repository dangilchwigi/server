import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './modules/test.module';
import { TokenModule } from './modules/token.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';
import { VerifyTokenMiddleware } from './common/middlewares/verifyToken.middleware';
import { MapModule } from './modules/maps.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TestModule,
    TokenModule,
    AuthModule,
    UserModule,
    MapModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyTokenMiddleware)
      .forRoutes('token/refresh-token', 'users/nickname');
  }
}
