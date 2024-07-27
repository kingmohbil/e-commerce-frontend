'use server';
import React, { FC, PropsWithChildren } from 'react';
import { redirect } from 'next/navigation';

import paths from '@/config/paths';
import { getSession } from '@/utils';

export interface ProtectedProps extends PropsWithChildren {}

const Protected: FC<ProtectedProps> = async (props) => {
  const user = await getSession();

  if (!user) redirect(paths.loginPage);

  return <>{props.children}</>;
};

export default Protected;
