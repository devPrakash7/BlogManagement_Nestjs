import { Body, Controller, Post } from '@nestjs/common';
import { userService } from './user.service';
import { CreateUserDto } from './userDto';



@Controller('users')
export class userController {

    constructor(private readonly userServices:userService){}

    @Post('signup')
    async signUp(@Body() createUserDto: CreateUserDto) {
      const newUser = await this.userServices.createUser(createUserDto);
      return newUser;
    }

    @Post('login')
    async Login(@Body() body: { email: string; password: string }) {
        const { email, password } = body;
        const user = await this.userServices.userLogin(email, password);
        return user;
  }
}
