import React, { FC } from 'react';
import clsx from 'clsx';

import { UserType } from '@/types/user';

export interface OrderUserDetailsProps {
  user: UserType;
  className?: string;
}

const OrderUserDetails: FC<OrderUserDetailsProps> = ({ user, className }) => {
  return (
    <div className={clsx('mb-4', className)}>
      <h2 className="text-xl font-semibold">User Details</h2>
      <div className="flex flex-col pl-4 text-base">
        <p>
          <strong className="text-sm font-medium">Name:</strong>{' '}
          <span className="font-normal">
            {user.firstName} {user.lastName}
          </span>
        </p>
        <p>
          <strong className="text-sm font-medium">Email:</strong>{' '}
          <span className={`font-normal ${user.email.verified ? 'text-success' : 'text-danger'}`}>
            {user.email.emailAddress} {user.email.verified ? '(Verified)' : '(Not Verified)'}
          </span>
        </p>
        <p>
          <strong className="text-sm font-medium">Phone:</strong>{' '}
          <span className={`${user.phone.verified ? 'text-success' : 'text-danger'}`}>
            {user.phone.phoneNumber} {user.phone.verified ? '(Verified)' : '(Not Verified)'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderUserDetails;
