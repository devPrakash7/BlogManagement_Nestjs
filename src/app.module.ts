import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './model/user.model';
import { userController } from './user/user.controller';
import { userService } from './user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:akki909@cluster0.sm3rshd.mongodb.net/akki'),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [userController],
  providers: [userService],
})
export class AppModule {}
