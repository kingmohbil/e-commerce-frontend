import { z, ZodError } from 'zod';

export type FlattenErrorType = (error: ZodError) => Record<string, string>;

export const flattenError: FlattenErrorType = (error) => {
  const errors: Record<string, string> = {};
  const fieldErrors = error.flatten().fieldErrors as any;

  Object.keys(fieldErrors).forEach((key) => (errors[key] = fieldErrors[key][0]));

  return errors;
};
