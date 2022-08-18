import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_name: string;

    @Column()
    product_cost: number;

    @Column()
    category_id: number;

    @ManyToOne(() => Category, (category: Category) => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Category;
}
