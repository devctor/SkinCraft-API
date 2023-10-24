import { SkinService } from '@/skin/skin.service';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly skinService: SkinService) {}
  onModuleInit() {
  //   console.log('cyka', this.skinService.getAllSkins())
  }
}
