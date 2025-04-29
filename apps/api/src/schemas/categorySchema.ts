import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  icon: z.string().min(1, 'Icon is required'),
});

export const categoryIdSchema = z.string().regex(/^[a-fA-F0-9]{24}$/, {
  message: 'Invalid category ID format',
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;
export type CategoryIdSchema = z.infer<typeof categoryIdSchema>;
