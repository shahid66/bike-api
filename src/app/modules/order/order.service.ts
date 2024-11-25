import CustomError from '../../utils/CustomError';
import { ProductModel } from '../product/product.model';
import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (orderData: IOrder) => {
  const product = await ProductModel.findById(orderData.product);
  if (!product) {
    throw new CustomError('Product not Found', 404);
  }
  if (product.quantity < orderData.quantity) {
    throw new CustomError('Insufficient Stock', 400);
  }
  const totalPrice = product.price * orderData.quantity;

  const order = new OrderModel({
    email: orderData.email,
    product: orderData.product,
    quantity: orderData.quantity,
    totalPrice,
  });
  const savedOrder = await order.save();

  product.quantity -= orderData.quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  return savedOrder;
};

const getRevenueFromDB = async () => {
  const revenue = await OrderModel.aggregate([
    {
      $lookup: {
        from: 'bikes',
        localField: 'product',
        foreignField: '_id',
        as: 'bikeDetails',
      },
    },
    {
      $unwind: '$bikeDetails',
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: { $multiply: ['$bikeDetails.price', '$quantity'] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  const totalRevenue = revenue.length > 0 ? revenue[0].totalRevenue : 0;

  return totalRevenue;
};

export const OrderServices = {
  createOrderIntoDB,
  getRevenueFromDB,
};
