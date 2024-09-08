'use server';
import { AxiosError } from 'axios';
import { redirect } from 'next/navigation';

import { formDataIntoObject } from '@/utils';
import { request } from '@/utils/server';
import { flattenError } from '@/validation/handlers/flattenErrors';
import signupSchema from '@/validation/auth/signupSchema';

const signup = async (prevState: any, data: FormData) => {
  let shouldRedirect = false;

  try {
    const validation = await signupSchema.safeParseAsync(formDataIntoObject(data));

    if (!validation.success)
      return {
        errors: flattenError(validation.error),
      };
    await request.post('/auth/signup', validation.data);
  } catch (error: any) {
    if (error instanceof AxiosError) return { success: false, errors: error.response?.data.errors };

    if (error?.data) return { success: false, errors: error.data.errors };

    return {
      success: false,
    };
  }

  shouldRedirect && redirect('/');
};

export { signup };
