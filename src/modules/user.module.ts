import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controllers/user.controller';
import { TokenService } from 'src/providers/token.service';
import { UserService } from 'src/providers/user.service';
import { User, UserSchema } from 'src/schema/user.schema';
import { AwsService } from 'src/utils/s3';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, AwsService, TokenService],
})
export class UserModule {}
