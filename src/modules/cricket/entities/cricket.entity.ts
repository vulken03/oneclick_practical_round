import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cricket {
    @PrimaryGeneratedColumn()
    cricket_id: number;

    @Column({ unique: true })
    team_name: string;
}

