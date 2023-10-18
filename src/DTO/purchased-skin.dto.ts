import { IsNotEmpty } from 'class-validator';

export class CreatePurchasedSkinDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  skinId: string;
}

export class PurchasedSkinDto {
  userId: string;
  skinId: string;
  purchaseDate: Date;
}
