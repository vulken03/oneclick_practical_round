import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateCricketDto {
    @IsString()
    @IsNotEmpty()
    team_name: string;
}

export class ScheduleCricketMatchDto {
    @IsString()
    @IsNotEmpty()
    team1: string

    @IsString()
    @IsNotEmpty()
    team2: string

    @IsNotEmpty()
    @IsDateString()
    match_date: string
}