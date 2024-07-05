import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (): Promise<{ error?: any; success: boolean }> => {
  try {
    const token = await cookies().get('access_token');

    jwt.verify(token?.value as string, process.env.ACCESS_TOKEN_SECRET as string);

    return { success: true };
  } catch (error) {
    return { error: error, success: false };
  }
};
