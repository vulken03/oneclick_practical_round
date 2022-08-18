

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    schedule_id: number;

    @Column()
    team1: string;

    @Column()
    team2: string;

    @Column()
    match_date:string;

    @Column()
    match_day: string;
}
