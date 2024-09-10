import React, { FC } from 'react';
import { AxiosError } from 'axios';
import { redirect } from 'next/navigation';

import { ProductView } from '@/components/product';
import text from '@/config/languages/en/product-view.json';
import { getSession } from '@/utils/auth';
import Product from '@/helpers/product';

export interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  let redirectPath = '';

  try {
    const user = getSession();
    const res = await new Product().getById(params.id);

    return (
      <div className="px-4 pt-4 flex flex-1">
        <ProductView
          addToCartProps={{
            messageProps: { message: text.message, color: 'secondary', autoHide: 2000 },
            text: text.addToCart,
          }}
          isAuthenticated={!!user}
          product={res.product}
          sizeLabel={text.sizesLabel}
        />
      </div>
    );
  } catch (error) {
    if (error instanceof AxiosError) redirectPath = '/404';
  }
  redirectPath !== '' && redirect(redirectPath);
};

export default Page;
