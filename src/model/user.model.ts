
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';



export interface userInterface {

    user_name: String,
    email: String,
    password: String
}



@Schema()
export class User extends Document implements userInterface {

    @Prop({ required: true, default: null })
    user_name: String;

    @Prop({ required: true, lowercase: true })
    email: String;

    @Prop({ required: true, min: 8 })
    password: String

}


export const userSchema = SchemaFactory.createForClass(User)