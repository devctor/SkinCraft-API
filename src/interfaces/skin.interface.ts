import { Document } from 'mongoose';

export interface ISkin extends Document {
  name: string;
  type: string;
  price: number;
  color: string;
}
