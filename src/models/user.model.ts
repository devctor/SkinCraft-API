import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { IUser } from '@/interfaces/user.interface';

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  // Define a one-to-many relationship with PurchasedSkin
  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'PurchasedSkin' }] })
  purchasedSkins: string[];
}

export const UserModel = SchemaFactory.createForClass<Partial<IUser>>(User);
