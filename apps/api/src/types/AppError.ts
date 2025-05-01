import { MulterError } from 'multer';
import { ZodError } from 'zod';

export interface AppError extends Error {
  statusCode?: number;
  code?: string;
}

export type CustomError = AppError | MulterError | ZodError;