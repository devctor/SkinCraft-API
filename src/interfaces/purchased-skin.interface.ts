import { Document } from 'mongoose';

export interface IPurchasedSkin extends Document {
  user: string;
  skin: string;
  purchaseDate: Date;
}
