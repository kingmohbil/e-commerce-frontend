import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export const getSession = (): AuthenticatedUser | null => {
  try {
    const token = cookies().get('access_token');

    return jwt.verify(
      token?.value as string,
      process.env.ACCESS_TOKEN_SECRET as string
    ) as AuthenticatedUser;
  } catch (error) {
    return null;
  }
};
