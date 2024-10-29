import { Entity, PrimaryGeneratedColum, Column } from "typeorm";

@Entity()
export class Product {
   @PrimaryGeneratedColum()
   id!: number; 
   
   @Column()
   name!: string;

   @Column("text")
   description!: string;

   @Column ("decimal")
   price!: number;

}