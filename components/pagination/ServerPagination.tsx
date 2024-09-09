'use client';
import React, { FC } from 'react';
import { Pagination, PaginationProps } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export interface ServerPaginationProps extends PaginationProps {
  limit: number;
  count: number;
  param?: string;
}

const ServerPagination: FC<ServerPaginationProps> = ({
  count,
  limit,
  param = 'page',
  ...props
}) => {
  const total = Math.ceil(count / limit);
  const router = useRouter();

  return (
    <Pagination
      isCompact
      showControls
      initialPage={1}
      onChange={(page) => router.push(`${param}=${page}`)}
      {...props}
      total={total}
    />
  );
};

export default ServerPagination;
