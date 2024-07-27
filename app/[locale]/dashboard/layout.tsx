import React, { FC } from 'react';

import { Protected } from '@/components';

export interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children }) => {
  return <Protected>{children}</Protected>;
};

export default ProtectedLayout;
