import * as Types from '@/types/product';
import { request } from '@/utils/server';
import paths from '@/config/api/paths/product-paths.json';

class Product {
  async getAll(params: Types.GetAllParams): Promise<Types.GetAllResponse> {
    try {
      const searchParams = new URLSearchParams(params as any);

      const res = await request.get(`${paths.getAll}?${searchParams.toString()}`);

      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default Product;
