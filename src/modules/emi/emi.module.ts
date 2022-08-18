import { Module } from '@nestjs/common';
import { EmiService } from './emi.service';
import { EmiController } from './emi.controller';

@Module({
  controllers: [EmiController],
  providers: [EmiService]
})
export class EmiModule {}
