import React, { FC } from 'react';
import Image from 'next/image';

import { navbarWidth } from './layout';

import { getSession, request } from '@/utils/server';
import { ProductCard, AnimateChildren } from '@/components';
import text from '@/config/languages/en/text.json';

const LoadProducts = async () => {
  const user = await getSession();

  const { data } = await request.get<{ products: ProductType[] }>('/product?limit=3&page=0');

  return data.products.map((product) => (
    <ProductCard
      key={product._id}
      actionText={text.common.button.addToCart}
      cart={!!user}
      className="w-[500px]"
      product={{ ...product, size: product.metadata[0].size, price: product.metadata[0].price }}
    />
  ));
};

interface HomeProps {}

const Home: FC<HomeProps> = async ({}) => {
  return (
    <>
      <div className={'flex relative'} style={{ minHeight: `calc(100vh - ${navbarWidth}px)` }}>
        <Image fill alt="lake picture" src="/banner.jpg" />
      </div>
      <div className="flex gap-10 py-5 px-20 flex-wrap justify-between flex-col text-center">
        <p className="text-5xl capitalize">{text.screens.home.featuredProducts}</p>
        <AnimateChildren
          initial="hidden"
          style={{ width: '100%' }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="flex gap-2 flex-wrap justify-between w-full">
            <LoadProducts />
          </div>
        </AnimateChildren>
      </div>
    </>
  );
};

export default Home;
