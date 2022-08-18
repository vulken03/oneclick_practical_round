import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ unique: true})
    category_name: string;
   
    @OneToMany(() =>Product, (product:Product) =>product.category,{ nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  products: Product[];
   
}
