import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  imagePath: z.string().min(1, 'ImagePath is required'),
  price: z.number().min(1, 'Price is required'),
  ingredients: z
    .array(
      z.object({
        name: z.string().min(1, 'Ingredient name is required'),
        icon: z.string().min(1, 'Ingredient icon is required'),
      }),
    )
    .optional(),
  category: z.string().min(1, 'Category is required'),
});

export type Product = z.infer<typeof productSchema>;
