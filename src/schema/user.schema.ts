import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AlcoholMBTI } from 'src/types';

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User {
  // 카카오 이메일
  @Prop({ required: true })
  email: String;

  // 닉네임
  @Prop({ required: true })
  nickname: String;

  // 프로필 이미지
  @Prop()
  profileImage: string;

  // 지역
  @Prop({ type: [String], default: [] })
  activityArea: String[];

  // 주종
  @Prop({ type: [String], default: [] })
  preferredAlcohol: String[];

  // 선호하는 안주
  @Prop({ type: [String], default: [] })
  preferredFoodPairing: String[];

  // 주종 MBTI
  @Prop({
    type: String,
    required: true,
    enum: AlcoholMBTI,
  })
  alcoholMBTI: AlcoholMBTI;
}

export const UserSchema = SchemaFactory.createForClass(User);
