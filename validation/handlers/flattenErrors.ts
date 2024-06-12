import { z } from 'zod';

export const flattenErrors = (e: z.ZodError) => {
  let errors: any = {};
  const flattenedErrors: any = e.flatten();

  Object.keys(flattenedErrors.fieldErrors).forEach((key) => {
    if (flattenedErrors.fieldErrors[key] && Array.isArray(flattenedErrors.fieldErrors[key])) {
      errors[key] = flattenedErrors.fieldErrors[key][0];
    }
  });
  
  return errors;
};
