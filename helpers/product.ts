import * as Types from '@/types/product';
import { request } from '@/utils/server';
import paths from '@/config/api/paths/product-paths.json';

const render = require('json-templater/string');

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

  async getById(id: string): Promise<Types.GetByIdResponse> {
    try {
      const res = await request.get(render(paths.getById, { id }));

      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default Product;
