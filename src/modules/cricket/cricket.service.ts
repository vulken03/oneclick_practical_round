import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCricketDto, ScheduleCricketMatchDto } from './dto/create-cricket.dto';
import { UpdateCricketDto } from './dto/update-cricket.dto';
import { Cricket } from './entities/cricket.entity';
import { Schedule } from './entities/schedule.entity';

@Injectable(

)
export class CricketService {
  constructor(@InjectRepository(Cricket)
  private cricketRepository: Repository<Cricket>,
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>
  ) {

  }
  async create(createCricketDto: CreateCricketDto) {
    const findData = await this.cricketRepository.findOne({
      where: {
        team_name: createCricketDto.team_name
      }
    })
    if (findData) {
      throw new HttpException('Team is alreay created with given team name', HttpStatus.FORBIDDEN)
    } else {
      const addTeamData = await this.cricketRepository.save({
        ...createCricketDto
      })
      if (addTeamData) {
        return addTeamData
      } else {
        throw new HttpException('error while creating team name', HttpStatus.FORBIDDEN)
      }
    }

  }
  async scheduleCreate(scheduleCricketDto: ScheduleCricketMatchDto) {
    if (scheduleCricketDto.team1 != scheduleCricketDto.team2) {
      const [data1, data2] = await Promise.all([
        this.cricketRepository.findOne({
          where: {
            team_name: scheduleCricketDto.team1
          }
        }),
        this.cricketRepository.findOne({
          where: {
            team_name: scheduleCricketDto.team2
          }
        })
      ])
      if (data1 && data2) {
        const d1 = new Date(scheduleCricketDto.match_date)
        const d2 = new Date('2022-12-31')
        if (d1.getTime() > d2.getTime()) {
          const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          let day = weekday[d1.getDay()];

          const detailsOfSchedule = await this.scheduleRepository.find({
            where: {
              match_date: scheduleCricketDto.match_date,
            }
          })
          let match_schedule_fixed: object;
          if (detailsOfSchedule.length > 0) {
            if (detailsOfSchedule.length < 2 && day == "Sunday") {
              match_schedule_fixed = await this.scheduleRepository.save({
                team1: scheduleCricketDto.team1,
                team2: scheduleCricketDto.team2,
                match_date: scheduleCricketDto.match_date,
                match_day: day
              })
              return match_schedule_fixed
            } else {
              throw new HttpException('match is already scheduled for a day', HttpStatus.FORBIDDEN)
            }
          } else {
            match_schedule_fixed = await this.scheduleRepository.save({
              team1: scheduleCricketDto.team1,
              team2: scheduleCricketDto.team2,
              match_date: scheduleCricketDto.match_date,
              match_day: day
            })
            return match_schedule_fixed
          }
        } else {
          throw new HttpException(`can't schedule a match before 31st Dec.`, HttpStatus.FORBIDDEN)
        }
      } else {
        throw new HttpException('data is not found of team1 or team2!', HttpStatus.FORBIDDEN)
      }
    } else {
      throw new HttpException('Team1 and team2 name not should be same!', HttpStatus.FORBIDDEN)
    }
  }
  async findTeamDetails() {
    const data = await this.cricketRepository.find();
    return data
  }

  async findScheduleDetails() {
    const data = await this.scheduleRepository.find();
    return data
  }



  async remove(id: number) {
    const find_data = await this.scheduleRepository.findOne({
      where: {
        schedule_id: id
      }
    })
    if (find_data) {
      await this.scheduleRepository.delete({ schedule_id: id })
      return true
    } else {
      throw new HttpException("data not found with given id", HttpStatus.FORBIDDEN)
    }
  }
}
