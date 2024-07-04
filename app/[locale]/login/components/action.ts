'use server';
import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { redirect } from 'next/navigation';

import { request, formDataIntoObject } from '@/utils';
import { flattenError } from '@/validation/handlers/flattenErrors';
import loginSchema from '@/validation/auth/loginSchema';

const cookieOptions: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict',
  path: '/',
};

const login = async (prevState: any, data: FormData) => {
  let shouldRedirect = false;

  try {
    const validation = await loginSchema.safeParseAsync(formDataIntoObject(data));

    if (!validation.success)
      return {
        success: false,
        errors: flattenError(validation.error),
      };

    const res = await request.post<{ accessToken: string; refreshToken: string }>(`/auth/login`, {
      email: validation.data.email,
      password: validation.data.password,
    });

    cookies().set({
      name: 'access_token',
      value: res.data.accessToken,
      maxAge: 3600 * 24,
      ...cookieOptions,
    });

    cookies().set({
      name: 'refresh_token',
      value: res.data.refreshToken,
      maxAge: 3600 * 24 * 15,
      ...cookieOptions,
    });

    shouldRedirect = true;
  } catch (error: any) {
    if (error instanceof AxiosError)
      return {
        success: false,
        errors: error.response?.data.errors,
      };

    return {
      success: false,
    };
  }

  shouldRedirect && redirect('/');
};

export { login };
