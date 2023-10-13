import { IsString } from 'class-validator';


export class CreateBlogDto {

    @IsString()
    title: string;

    @IsString()
    desc: string;

    @IsString()
    date: string;

    @IsString()
    name:string
}
