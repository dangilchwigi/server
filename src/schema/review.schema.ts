import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Number } from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  versionKey: false,
})
export class Review {
  // 게시글 id
  @Prop()
  alcoholGatheringBoardId: String;

  // 키워드
  @Prop()
  keywords: object;

  // 리뷰 글
  @Prop()
  description: String;

  // 리뷰 점수
  @Prop()
  rating: Number;

  // 리뷰 작성자
  @Prop()
  writer: String;

  // 다시 만날 의사 여부
  @Prop()
  isWillMeetAgain: boolean;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
