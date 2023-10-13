import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Blog } from '../model/blog.model';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './blogDto';



@Controller()
export class blogController {
    constructor(private readonly blogService:BlogService){}

    @Post('/createBlog')
    async createBlog(@Body() createBlogDto:CreateBlogDto): Promise<Blog>{
        const data = await this.blogService.createBlog(createBlogDto)
        return data;
    }
    
    @Get('/allBlog')
    async getAllBlog():Promise<Blog[]> {
        const data = await this.blogService.findAllBlog()
        return data;
    }

    @Get(':id')
    async getBlog(@Param('id') id: string): Promise<Blog | null> {
        const blog = await this.blogService.findOneBlog(id);
        return blog;
    }

    @Put(':id')
    async updateBlog(@Param('id') @Body() id: string  , createBlogDto:CreateBlogDto): Promise<Blog | null> {
        const blog = await this.blogService.updateBlog(id , createBlogDto);
        return blog;
    }

    @Delete(':id')
    async deleteBlog(@Param('id') id: string ): Promise<Blog | null> {
        const blog = await this.blogService.deleteBlog(id);
        return blog;
    }
    
}

