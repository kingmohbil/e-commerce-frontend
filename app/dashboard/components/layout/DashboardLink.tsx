import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

export interface DashboardLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
}

const DashboardLink: FC<DashboardLinkProps> = ({ active, icon, children, ...props }) => {
  return (
    <Link
      {...props}
      className={clsx(
        `${active ? 'bg-[#F2F2F2]' : ''} p-2 h-10 text-sm flex items-center gap-2 font-bold hover:bg-[#F2F2F2] rounded-lg transition-colors`,
        props.className
      )}
    >
      {active ? (
        <>
          {icon} {children}
        </>
      ) : (
        <>{icon}</>
      )}
    </Link>
  );
};

export default DashboardLink;
