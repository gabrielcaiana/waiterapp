import { Request, Response } from 'express';
import multer from 'multer';
import { logger } from '@/logger';
import { ZodError } from 'zod';
import { CustomError } from '@/types/AppError';

export function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
): void {
  logger.error(err);

  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.status(400).json({
        error: 'File size exceeds the allowed limit (5MB)',
      });
    }
    res.status(400).json({ error: err.message });
    return;
  }

  if (err instanceof ZodError) {
    res.status(400).json({
      error: 'Validation failed',
      issues: err.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
    return;
  }

  if (err.statusCode) {
    res.status(err.statusCode).json({
      error: err.message,
    });
    return;
  }

  res.status(500).json({
    error: 'Internal server error',
  });
}
