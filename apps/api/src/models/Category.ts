import { model, Schema } from 'mongoose';

export const Category = model(
  'Category',
  new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 3,
    },
    icon: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 3,
    },
  }),
);
