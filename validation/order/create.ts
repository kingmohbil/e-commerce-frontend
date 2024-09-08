import { z } from 'zod';

import validations from '@/config/api/validations/order';

export const itemSchema = z.object({
  size: z
    .string({ required_error: validations.errors.size })
    .trim()
    .toLowerCase()
    .min(validations.size.min, validations.errors.size),
  product: z.string({ required_error: validations.errors.product }).trim(),
  quantity: z
    .number({ required_error: validations.errors.quantity })
    .min(validations.quantity.min, validations.errors.quantity),
});

const schema = z.object({
  items: z.array(itemSchema).nonempty(),
  address: z
    .string({ required_error: validations.errors.address })
    .trim()
    .min(validations.address.min, validations.errors.address),
});

export default schema;
