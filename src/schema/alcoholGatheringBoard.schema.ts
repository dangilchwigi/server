import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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

  // 모인 주선자
  @Prop()
  host: String;

  // 글 내용
  @Prop()
  description: String;

  // 만날 장소
  @Prop()
  meetingLocation: String;

  // 참여 인원 수
  @Prop()
  maxGuests: number;

  // 키워드
  @Prop([String])
  keywords: String[];

  // 참여 인원 리스트
  @Prop([String])
  guestList: String[];

  // 만날 시간
  @Prop({ type: Date })
  meetingTime: Date;

  // 마감 시간
  @Prop({ type: Date })
  deadlineTime: Date;

  // 마감 여부
  @Prop({ default: false })
  isOpen: boolean;
}

export const AlcoholGatheringBoardSchema = SchemaFactory.createForClass(
  AlcoholGatheringBoard
);
