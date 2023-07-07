import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Date, Document, Number } from 'mongoose';

export type AlcoholGatheringBoardDocument = AlcoholGatheringBoard & Document;

@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  versionKey: false,
})
export class AlcoholGatheringBoard {
  // 제목
  @Prop({ required: true })
  title: String;

  // 글 내용
  @Prop()
  description: String;

  // 만날 장소
  @Prop()
  meetingLocation: String;

  // 참여 인원 수
  @Prop()
  maxGuests: Number;

  // 키워드
  @Prop([String])
  keywords: String[];

  // 참여 인원 리스트
  @Prop([String])
  guestList: String[];

  // 만날 시간
  @Prop()
  meetingTime: Date;

  // 마감 시간
  @Prop()
  deadlineTime: Date;

  // 마감 여부
  @Prop({ default: false })
  isOpen: boolean;
}

export const AlcoholGatheringBoardSchema = SchemaFactory.createForClass(
  AlcoholGatheringBoard
);
