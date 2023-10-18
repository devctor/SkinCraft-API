import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ISkin } from '@/interfaces/skin.interface';

@Schema()
export class Skin extends Document {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  price: number;

  @Prop()
  color: string;
}

export const SkinModel = SchemaFactory.createForClass<ISkin>(Skin);
