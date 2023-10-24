import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Skin } from '@Models/skin.model';
import { SkinSchema } from '../schemas/skin.schema';
import { ISkin } from '@/interfaces/skin.interface';
import { join } from 'path';

@Injectable()
export class SkinService {
  private skinData: Skin[] = [];

  constructor() {
    this.loadSkinDataFromFile();
  }

  private loadSkinDataFromFile() {
    try {
      const rawData = fs.readFileSync(join(__dirname, 'skins.json'), 'utf-8');

      const parsedData = JSON.parse(rawData);

      if (Array.isArray(parsedData)) {
        this.skinData = parsedData.map((rawSkin) => this.validateAndSanitizeSkin(rawSkin));
      } else {
        throw new Error('Invalid data format in skins.json');
      }
    } catch (error) {
      console.error('Error reading skin data:', error);
    }
  }

  private validateAndSanitizeSkin(rawSkin: ISkin): Skin {
  try {
    const skin: any = SkinSchema.parse(rawSkin);
      return skin;
    } catch (error) {
      console.error('Validation error:', error);
      return {
        name: 'Unknown',
        type: 'Unknown',
        price: 0,
        color: 'Unknown',
      } as any;
    }
  }

  getAllSkins(): Skin[] {
    return this.skinData;
  }
}
