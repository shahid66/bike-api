import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const BikeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: {
      type: Number,
      required: true,
      min: [0, 'Quantity must be a positive number'],
    },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model<IProduct>('Bike', BikeSchema);
