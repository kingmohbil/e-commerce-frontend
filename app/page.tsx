import React, { Suspense } from 'react';
import Image from 'next/image';

import { navbarWidth } from './layout';

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
      <div className={'flex relative'} style={{ minHeight: `calc(100vh - ${navbarWidth}px)` }}>
        <Image fill alt="lake picture" src="/banner.jpg" />
      </div>
      <div className="flex gap-10 py-5 px-40 flex-wrap justify-between">
        <LoadProducts />
      </div>
    </>
  );
};

export default Home;
