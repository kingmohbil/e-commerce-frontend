import React, { Suspense } from 'react';

import { pubRequest } from '@/utils';
import { ProductCard } from '@/components';
import { ProductType } from '@/types/product';

const LoadProducts = async () => {
  const { data } = await pubRequest.get<{ products: ProductType[] }>('/product');

  return data.products.map((product) => (
    <ProductCard key={product._id} className="w-[500px]" product={product} />
  ));
};

const Home = () => {
  return (
    <>
      <div className="text-sm flex" />
      <div className="flex flex-wrap gap-8 justify-center pt-8">
        <LoadProducts />
      </div>
    </>
  );
};

export default Home;
