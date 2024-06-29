import axios from 'axios';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

const token = cookies().get('access_token') as RequestCookie;

export const pubRequest = axios.create({
  baseURL: process.env.BACKEND_DOMAIN,
});

export const request = axios.create({
  baseURL: process.env.BACKEND_DOMAIN,
  headers: {
    Authorization: `Bearer ${token?.value}`,
  },
});

export default { pubRequest, request };
