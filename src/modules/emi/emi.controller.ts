import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmiService } from './emi.service';
import { CreateEmiDto } from './dto/create-emi.dto';
import { UpdateEmiDto } from './dto/update-emi.dto';

@Controller('emi')
export class EmiController {
  constructor(private readonly emiService: EmiService) {}

  @Post()
  create(@Body() createEmiDto: CreateEmiDto) {
    return this.emiService.create(createEmiDto);
  }
  
}
