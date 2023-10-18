import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateSkinDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsString()
  color: string;
}

export class SkinDto {
  name: string;
  type: string;
  price: number;
  color: string;
}
