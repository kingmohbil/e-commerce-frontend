import { z } from 'zod';

import { calculateAge, passwordValidator } from '@/utils';
import { userConfig, AUTH_ERROR_MESSAGES } from '@/config';

const createUser = z
  .object({
    firstName: z
      .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_FIRST_NAME })
      .trim()
      .toLowerCase()
      .min(userConfig.validation.firstName.length, AUTH_ERROR_MESSAGES.INVALID_FIRST_NAME),

    lastName: z
      .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_LAST_NAME })
      .trim()
      .toLowerCase()
      .min(userConfig.validation.lastName.length, AUTH_ERROR_MESSAGES.INVALID_LAST_NAME),

    email: z
      .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_EMAIL })
      .trim()
      .toLowerCase()
      .email(AUTH_ERROR_MESSAGES.INVALID_EMAIL),

    phoneNumber: z
      .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_PHONE_NUMBER })
      .trim()
      .toLowerCase()
      .min(10, AUTH_ERROR_MESSAGES.INVALID_PHONE_NUMBER),

    dateOfBirth: z.string({ required_error: AUTH_ERROR_MESSAGES.INVALID_DATE_OF_BIRTH }).refine(
      (dob) => {
        const age = calculateAge(new Date(dob));

        return age >= userConfig.validation.age;
      },
      { message: AUTH_ERROR_MESSAGES.INVALID_DATE_OF_BIRTH }
    ),
    password: z
      .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_PASSWORD })
      .trim()
      .refine((val) => passwordValidator.validate(val), AUTH_ERROR_MESSAGES.INVALID_PASSWORD),
    confirmPassword: z
      .string({ required_error: AUTH_ERROR_MESSAGES.INVALID_PASSWORD })
      .trim()
      .refine((val) => passwordValidator.validate(val), AUTH_ERROR_MESSAGES.INVALID_PASSWORD),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: `Passwords don't match`,
    path: ['confirmPassword'],
  });

export default createUser;
