import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    category_name: string;
    @IsNotEmpty()
    @IsString()
    product_name: string;

    @IsNotEmpty()
    @IsNumber()
    product_cost:number;
}
