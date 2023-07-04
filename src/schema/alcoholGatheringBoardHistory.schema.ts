import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type AlcoholGatheringBoardHistoryDocument =
  AlcoholGatheringBoardHistory & Document;

@Schema({
  timestamps: { createdAt: 'createdAt' },
  versionKey: false,
})
export class AlcoholGatheringBoardHistory {
  // 게시물 ID
  @Prop({ required: true, type: SchemaTypes.ObjectId })
  boardId: string;

  // 히스토리 내용
  @Prop({ index: true })
  users: string[];

  // 히스토리에 포함된 키워드
  @Prop({ type: [String], default: [], index: true })
  keywords: string[];
}

export const AlcoholGatheringBoardHistorySchema = SchemaFactory.createForClass(
  AlcoholGatheringBoardHistory
);
