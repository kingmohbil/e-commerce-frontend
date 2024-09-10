'use server';
import { GetAllParams } from '@/types/product';
import Product from '@/helpers/product';

const get = async (params: GetAllParams): ServerActionResponse => {
  try {
    const res = await new Product().getAll(params);

    return { success: true, data: res, message: 'Fetched products successfully' };
  } catch (error: any) {
    return { success: false, message: `Failed to fetch products ${error?.message}` };
  }
};

export { get };
