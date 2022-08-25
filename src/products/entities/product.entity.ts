import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  storedQty: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
