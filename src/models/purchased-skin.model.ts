import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { IPurchasedSkin } from '@/interfaces/purchased-skin.interface';

@Schema()
export class PurchasedSkin extends Document {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  user: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Skin' })
  skin: string;

  @Prop()
  purchaseDate: Date;
}

export const PurchasedSkinModel = SchemaFactory.createForClass<IPurchasedSkin>(PurchasedSkin);
