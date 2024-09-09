import React, { FC } from 'react';

import common from '@/config/languages/en/common.json';
import { ProductCard, NoItemsInCart } from '@/components';
import Category from '@/helpers/category';
import text from '@/config/languages/en/category.json';
import { getSession } from '@/utils/auth';

export interface PageProps {
  params: {
    id: string;
  };
  searchParams?: {
    page?: string;
  };
}

const LoadProducts = async ({ id }: { id: string }) => {
  const products = await new Category().getProductsById(id);

  const session = getSession();

  return (
    <>
      <h1 className="text-4xl font-semibold capitalize">{products.category.name}</h1>
      <div className="flex mt-8 flex-wrap gap-8 justify-center">
        {products.products.length === 0 && <NoItemsInCart text={text.noProducts} />}
        {products.products.map((product) => (
          <ProductCard
            key={product._id}
            actionText={common.button.addToCart}
            cart={!!session}
            className="max-w-56 sm:max-w-[400px]"
            product={{
              ...product,
              size: product.metadata[0].size,
              price: product.metadata[0].price,
            }}
          />
        ))}
      </div>
    </>
  );
};

const Page: FC<PageProps> = ({ params }) => {
  return (
    <div className="flex flex-1 flex-col px-8 py-8">
      <LoadProducts id={params.id} />
    </div>
  );
};

export default Page;
