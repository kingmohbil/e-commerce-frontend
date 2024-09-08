import React, { FC } from 'react';

import { Protected } from '@/components';

export interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return <Protected />;
};

export default Page;
