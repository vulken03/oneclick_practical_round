import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Response } from 'express'
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post('/add')
  async create(@Res() res: Response, @Body() createCategoryDto: CreateCategoryDto) {
    const data = await this.categoryService.create(createCategoryDto);
    res.status(HttpStatus.OK).send({
      code: HttpStatus.OK,
      data,
      message: "category and product created successfully"
    })
  }

  @Get('/listing')
  async findAll(@Res() res: Response) {
    const data = await this.categoryService.findAll();
    res.status(HttpStatus.OK).send({
      code: HttpStatus.OK,
      data,
      message: "category wise product data fetched successfully"
    })
  }

}

