import { Module } from '@nestjs/common';
import { CricketService } from './cricket.service';
import { CricketController } from './cricket.controller';
import { Cricket } from './entities/cricket.entity';
import { Schedule } from './entities/schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Cricket,Schedule])],
  controllers: [CricketController],
  providers: [CricketService]
})
export class CricketModule {}
