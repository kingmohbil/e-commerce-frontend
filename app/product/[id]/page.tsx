import React, { FC } from 'react';

import { ProductView } from '@/components/product';
import text from '@/config/languages/en/product-view.json';
import { getSession } from '@/utils/auth';

const product = {
  _id: '6674d2a8a353e612e13bd6b3',
  name: 'rustic granite towels',
  categoryId: '6674d2a3a353e612e13bd6ae',
  description: 'bypassing mouse oregon dot-com district',
  active: true,
  createdAt: '2024-06-21T01:08:24.694Z',
  updatedAt: '2024-06-21T01:08:24.694Z',
  metadata: [
    {
      price: 440,
      size: 'whether',
      inStock: 4855526915571710,
    },
    {
      price: 355,
      size: 'angelic',
      inStock: 5453995367727104,
    },
    {
      price: 210,
      size: 'across',
      inStock: 13354536009728,
    },
  ],
  totalStock: 0,
  imageURL:
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1200&q=75',
  defaultPrice: 0,
  __v: 0,
};

export interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const user = getSession();

  return (
    <div className="px-4 pt-4">
      <ProductView
        addToCartProps={{
          messageProps: { message: text.message, color: 'secondary', autoHide: 2000 },
          text: text.addToCart,
        }}
        isAuthenticated={!!user}
        product={product}
        sizeLabel={text.sizesLabel}
      />
    </div>
  );
};

export default Page;
