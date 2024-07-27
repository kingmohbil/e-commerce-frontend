import crypto from 'crypto';

import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export const getSession = async (): Promise<AuthenticatedUser | null> => {
  try {
    const token = cookies().get('access_token');

    const buffer = Buffer.from(process.env.ACCESS_TOKEN_SECRET);
    const key = crypto.createSecretKey(buffer as unknown as Uint8Array);

    const { payload } = await jwtVerify(token?.value as string, key);

    return payload as AuthenticatedUser;
  } catch (error) {
    return null;
  }
};
