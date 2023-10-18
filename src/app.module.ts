import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://skin:O2K1xfwR5hOhdq7u@skincraft.rl0qanz.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
