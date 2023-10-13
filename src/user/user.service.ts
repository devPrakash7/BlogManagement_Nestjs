import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../model/user.model';
import { CreateUserDto } from './userDto';



@Injectable()
export class userService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const users = new this.userModel(createUserDto);
        return users.save();
    }

    async userLogin(email: string, password: string): Promise<User | null> {
        const user = await this.userModel.findOne({ email });
        if (user && user.password === password) {
            return user;
        }
        return null;
    }
}

