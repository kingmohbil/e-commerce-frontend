import { z } from 'zod';

import { passwordValidator } from '@/utils';
import { AUTH_ERROR_MESSAGES } from '@/config';

const loginSchema = z.object({
  email: z
    .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_EMAIL })
    .toLowerCase()
    .trim()
    .email(AUTH_ERROR_MESSAGES.INVALID_EMAIL),
  password: z
    .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_PASSWORD })
    .trim()
    .refine((val) => passwordValidator.validate(val), AUTH_ERROR_MESSAGES.INVALID_PASSWORD),
});

export default loginSchema;
