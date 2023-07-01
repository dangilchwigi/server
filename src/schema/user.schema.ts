import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  @Prop([String])
  activityArea: String[];

  // 주종
  @Prop([String])
  preferredAlcohol: String[];

  // 선호하는 안주
  @Prop([String])
  preferredFoodPairing: String[];

  // 주종 MBTI
  @Prop({
    type: String,
    required: true,
    enum: ['활기차고 재미있어요', '진지한 얘기를 좋아해요'],
  })
  alcoholMBTI: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
