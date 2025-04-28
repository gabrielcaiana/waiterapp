import { model, Schema } from 'mongoose';

export const Product = model(
  'Product',
  new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 3,
    },
    imagePath: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 3,
    },
    price: {
      type: Number,
      required: true,
      maxlength: 64,
      minlength: 3,
    },
    ingredients: {
      required: true,
      type: [
        {
          name: { type: String, required: true },
          icon: { type: String, required: true },
        },
      ],
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
  }),
);
