import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MemoriesDocument = Memories & Document;

@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  versionKey: false,
})
export class Memories {
  // 유저 이메일
  @Prop()
  MemoriesEmail: String;

  // 내용
  @Prop([String])
  contents: string[];
}

export const MemoriesSchema = SchemaFactory.createForClass(Memories);
