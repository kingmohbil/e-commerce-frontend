'use server';
import { AxiosError } from 'axios';
import { redirect } from 'next/navigation';

import { pubRequest, formDataIntoObject } from '@/utils';
import { flattenError } from '@/validation/handlers/flattenErrors';
import signupSchema from '@/validation/auth/signupSchema';

const signup = async (prevState: any, data: FormData) => {
  try {
    const validation = await signupSchema.safeParseAsync(formDataIntoObject(data));

    if (!validation.success)
      return {
        errors: flattenError(validation.error),
      };
    await pubRequest.post('/auth/signup', validation.data);

    redirect('/');
  } catch (error: any) {
    if (error instanceof AxiosError) return { success: false, errors: error.response?.data.errors };

    if (error?.data) return { success: false, errors: error.data.errors };

    return {
      success: false,
    };
  }
};

export { signup };
