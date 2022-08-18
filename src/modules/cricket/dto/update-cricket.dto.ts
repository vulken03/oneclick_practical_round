import { PartialType } from '@nestjs/mapped-types';
import { CreateCricketDto } from './create-cricket.dto';

export class UpdateCricketDto extends PartialType(CreateCricketDto) {}
