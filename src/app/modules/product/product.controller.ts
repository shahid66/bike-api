import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProductIntoDB(req.body);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
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
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: {
          name: err.name,
          errors: err.errors,
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    }
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Products are retrieved successfully',
      data: result,
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
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: {
          name: err.name,
          errors: err.errors,
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    }
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);

    if (!result) {
      res.status(201).json({
        message: 'Product Not Found ',
        success: false,
      });
    } else {
      res.status(200).json({
        message: 'Product retrieved successfully ',
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
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: {
          name: err.name,
          errors: err.errors,
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    }
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.updateProductFromDB(
      productId,
      req.body,
    );
    if (!result) {
      res.status(201).json({
        message: 'Product Not Found or Not Update',
        success: false,
      });
    } else {
      res.status(201).json({
        message: 'Product Update successfully ',
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
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: {
          name: err.name,
          errors: err.errors,
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    }
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);
    if (!result) {
      res.status(201).json({
        message: 'Product Not Found for Delete',
        success: false,
      });
    } else {
      res.status(201).json({
        message: 'Product Delete successfully ',
        success: true,
        data: {},
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
      res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: {
          name: err.name,
          errors: err.errors,
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    }
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
