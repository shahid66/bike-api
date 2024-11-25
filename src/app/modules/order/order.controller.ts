import { NextFunction, Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderServices.createOrderIntoDB(req.body);

    if (result) {
      res.status(201).json({
        message: 'Order successfully added',
        success: true,
        data: result,
      });
    }
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: {
          name: err.name,
          errors: err.errors,
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    } else {
      next(err);
    }
  }
};
const getRevenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const totalRevenue = await OrderServices.getRevenueFromDB();

    res.status(200).json({
      message: 'Total revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: {
          name: err.name,
          errors: err.errors,
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    } else {
      next(err);
    }
  }
};

export const OrderControllers = {
  createOrder,
  getRevenue,
};
