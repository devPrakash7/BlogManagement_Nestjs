import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface blogInterface {

    title: String,
    desc: String,
    date: String,
    name:String
}


@Schema()
export class Blog extends Document implements blogInterface{

      @Prop({required:true , default:null})
      title:string;

      @Prop({required:true , default:null})
      desc:string

      @Prop({required:true , default:new Date()})
      date:string

      @Prop({required:true , default:null , lowercase:true})
      name:string

  }
  

  export const blogSchema = SchemaFactory.createForClass(Blog)