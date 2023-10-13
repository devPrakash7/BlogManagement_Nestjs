import { Injectable , NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from "../model/blog.model";
import { CreateBlogDto } from '../blog/blogDto'


@Injectable()
export class BlogService {

    constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog>) { }

    async createBlog(CreateBlog: CreateBlogDto): Promise<Blog> {
        const blog = new this.blogModel(CreateBlog)
        return blog.save();
    }
    async findAllBlog(): Promise<Blog[]> {
        const blog = await this.blogModel.find().exec()
        return blog
    }

    async findOneBlog(id: string): Promise<Blog | null> {
        const blog = await this.blogModel.findById(id).exec();
        return blog;
      }

    async updateBlog(id: string, createBlog: CreateBlogDto): Promise<Blog> {

        const existingBlog = await this.blogModel.findById(id).exec();

        if (!existingBlog) {
            throw new NotFoundException(`Blog with id ${id} not found.`);
          }
      
            Object.assign(existingBlog, createBlog);
             return existingBlog.save();
        }

        async deleteBlog(id:string) : Promise<Blog> {

            const existingBlog = await this.blogModel.findByIdAndDelete(id).exec();
            return existingBlog;
        }
    }
