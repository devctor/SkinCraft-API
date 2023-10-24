import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SkinService } from './skin/skin.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://skin:O2K1xfwR5hOhdq7u@skincraft.rl0qanz.mongodb.net/'), UserModule],
  controllers: [AppController],
  providers: [AppService, SkinService, UserService],
})
export class AppModule {}
