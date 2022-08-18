import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateEmiDto {

    @IsNotEmpty()
    @IsDateString()
    booking_date: string;
    @IsNotEmpty()
    @IsDateString()
    checkin_date: string;
    @IsNumber()
    amount: string;
}
