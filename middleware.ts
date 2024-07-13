import { NextRequest, NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';

import i18nConfig from './i18nConfig';

import { getSession } from '@/utils/auth';

function authMiddleware(req: NextRequest) {
  if (!req.nextUrl.pathname.includes('protected')) return NextResponse.next();

  const user = getSession();

  if (!user) return NextResponse.redirect(new URL('/login', req.url));

  return NextResponse.next();
}

function internationalizationMiddleware(req: NextRequest) {
  const authResponse = authMiddleware(req);

  const localizationRes = i18nRouter(req, i18nConfig);

  if (authResponse.status === 307) return authResponse;

  return localizationRes;
}

export function middleware(req: NextRequest) {
  return internationalizationMiddleware(req);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
