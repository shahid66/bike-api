import { Request, Response } from 'express';
import CustomError from '../utils/CustomError'; // Adjust the path as needed

const errorHandler = (err: CustomError, req: Request, res: Response) => {
  const statusCode = err.statusCode || 500; // Default to 500 if no statusCode is set
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    // Include stack trace only in development mode
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default errorHandler;
