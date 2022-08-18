import { PartialType } from '@nestjs/mapped-types';
import { CreateEmiDto } from './create-emi.dto';

export class UpdateEmiDto extends PartialType(CreateEmiDto) {}
