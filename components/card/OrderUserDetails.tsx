import React, { FC } from 'react';
import clsx from 'clsx';

import { UserType } from '@/types/user';

export interface OrderUserDetailsProps {
  user: UserType;
  className?: string;
}

const OrderUserDetails: FC<OrderUserDetailsProps> = ({ user, className }) => {
  return (
    <p className={clsx('text-lg font-semibold capitalize', className)}>
      {user.firstName} {user.lastName}
    </p>
  );
};

export default OrderUserDetails;
