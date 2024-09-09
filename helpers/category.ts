import * as Types from '@/types/category';
import { request } from '@/utils/requests';
import paths from '@/config/api/paths/category-paths.json';

const render = require('json-templater/string');

class Category {
  async getAll(): Promise<Types.GetAllResponse> {
    try {
      const { data } = await request.get(`${paths.getAll}?active=true`);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProductsById(id: string): Promise<Types.GetAllProductsByIdResponse> {
    try {
      const url = render(paths.getProductsById, { id });
      const res = await request.get(url);

      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default Category;
