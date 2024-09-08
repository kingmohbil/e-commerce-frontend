import * as Types from '@/types/order';
import paths from '@/config/api/paths/order-paths.json';
import { request } from '@/utils/server';

class Order {
  async create(params: Types.CreateParams): Promise<Types.CreateResponse> {
    try {
      const res = await request.post(paths.create, params);

      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export * from '@/types/order';

export default Order;
