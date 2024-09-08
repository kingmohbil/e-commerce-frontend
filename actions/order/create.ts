'use server';
import validation from '@/validation/order/create';
import { CreateParams } from '@/types/order';
import { flattenError } from '@/validation/handlers/flattenErrors';
import { Order } from '@/helpers';

const create = async (data: CreateParams): ServerActionResponse => {
  try {
    const validationResult = await validation.safeParseAsync(data);

    if (!validationResult.success)
      return { errors: flattenError(validationResult.error), success: false };
    const orderClient = new Order();

    const res = await orderClient.create(validationResult.data);

    return { success: true, data: res, message: res.message };
  } catch (error: any) {
    return { success: false, message: error?.message ?? '' };
  }
};

export { create };
