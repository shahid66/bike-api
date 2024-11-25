import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
const updateProductFromDB = async (id: string, productData: IProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
