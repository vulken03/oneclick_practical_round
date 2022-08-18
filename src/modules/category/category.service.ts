import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) { }
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const find_category = await this.categoryRepository.findOne({
        where: {
          category_name: createCategoryDto.category_name
        }
      })
      let add_product: object;
      if (!find_category) {
        const add_category = await this.categoryRepository.save({
          category_name: createCategoryDto.category_name
        })
        add_product = await this.productRepository.save({
          product_name: createCategoryDto.product_name,
          product_cost:createCategoryDto.product_cost,
          category_id: add_category.category_id
        })
        if (add_product) {
          return add_product
        } else {
          throw new HttpException('error while creating data', HttpStatus.FORBIDDEN)
        }
      } else {
        add_product = await this.productRepository.save({
          product_name: createCategoryDto.product_name,
          product_cost:createCategoryDto.product_cost,
          category_id: find_category.category_id
        })
        if (add_product) {
          return add_product
        } else {
          throw new HttpException('error while creating data', HttpStatus.FORBIDDEN)
        }
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN)
    }
  }

  async findAll() {
    try {
      const data = await this.categoryRepository.find({
        relations: ['products']
      })
      return data
    } catch (error) {

      throw new HttpException(error, HttpStatus.FORBIDDEN)
    }
  }

 
}
