import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CricketService } from './cricket.service';
import { CreateCricketDto, ScheduleCricketMatchDto } from './dto/create-cricket.dto';
import { UpdateCricketDto } from './dto/update-cricket.dto';
import { Response } from 'express'
@Controller('cricket')
export class CricketController {
  constructor(private readonly cricketService: CricketService) { }

  @Post('/addTeam')
  async create(@Res() res: Response, @Body() createCricketDto: CreateCricketDto) {
    const data = await this.cricketService.create(createCricketDto);
    res.status(HttpStatus.OK).send({
      code:HttpStatus.OK,
      data,
      message:"Team created successfully"
    })
  }

  @Get('/getTeamDetails')
  async findAll(@Res() res: Response) {
    const details = await this.cricketService.findTeamDetails();
    res.status(HttpStatus.OK).send({
      code:HttpStatus.OK,
      data:details,
      message:"Team data fetched successfully"
    })
  }

  @Get('/getScheduleDetails')
  async findAllSchedules(@Res() res: Response) {
    const details = await this.cricketService.findScheduleDetails();
    res.status(HttpStatus.OK).send({
      code:HttpStatus.OK,
      data:details,
      message:"Team data fetched successfully"
    })
  }

  @Post('/addTeamSchedule')
  async createSchedule(@Res() res: Response, @Body()scheduleCricketDto: ScheduleCricketMatchDto) {
    const data = await this.cricketService.scheduleCreate(scheduleCricketDto);
    res.status(HttpStatus.OK).send({
      code:HttpStatus.OK,
      data,
      message:"Team created successfully"
    })
  }

  @Delete('deleteData/:id')
  async remove(@Res() res: Response,@Param('id') id:number) {
    const deleteData=await this.cricketService.remove(+id);
    res.status(HttpStatus.OK).send({
      code:HttpStatus.OK,
      data:deleteData,
      message:"data Deleted successfully"
    })
  }

}
