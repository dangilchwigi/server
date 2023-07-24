import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { AlcoholMBTI } from 'src/types';
import { AwsService } from 'src/utils/s3';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private awsService: AwsService
  ) {}

  async createProfile(
    file,
    {
      email,
      activityArea,
      preferredAlcohol,
      preferredFoodPairing,
      nickname,
      alcoholMBTI,
    }
  ) {
    try {
      const profileImage = await (async () => {
        if (!!file) {
          const result = await this.awsService.uploadFileToS3(
            `profileImages/${email}/${email}.jpeg`,
            file
          );

          return result.url;
        }

        return undefined;
      })();

      const createUserProfile = new this.userModel({
        email,
        nickname,
        alcoholMBTI: AlcoholMBTI[alcoholMBTI],
        ...(!!profileImage && { profileImage }),
        ...(!!activityArea && { activityArea: JSON.parse(activityArea) }),
        ...(!!preferredAlcohol && {
          preferredAlcohol: JSON.parse(preferredAlcohol),
        }),
        ...(!!preferredFoodPairing && {
          preferredFoodPairing: JSON.parse(preferredFoodPairing),
        }),
      });
      await createUserProfile.save();

      return { statusCode: 201, data: { isPosted: true } };
    } catch (error) {
      console.log(error);
      return { statusCode: 500, data: { message: '서버요청 실패' } };
    }
  }

  async getNickname(email: string) {
    try {
      const userInfo = await this.userModel.findOne({ email });

      return { statusCode: 200, data: { nickname: userInfo.nickname } };
    } catch (error) {
      console.log(error);
      return { statusCode: 500, data: { message: '서버요청 실패' } };
    }
  }
}
