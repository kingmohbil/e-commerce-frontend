import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

import { navbarWidth } from './layout';

import { request } from '@/utils';
import { ProductCard, AnimateChildren } from '@/components';
import text from '@/config/languages/en/text.json';

const LoadProducts = async () => {
  const { data } = await request.get<{ products: ProductType[] }>('/product?limit=3&page=0');

  return data.products.map((product) => (
    <ProductCard
      key={product._id}
      action={
        <Button color="primary" radius="full" variant="shadow">
          {text.common.button.addToCart}
        </Button>
      }
      className="w-[500px]"
      product={product}
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
      <div className="flex gap-10 py-5 px-40 flex-wrap justify-between flex-col text-center">
        <p className="text-5xl text-white capitalize">{text.screens.home.featuredProducts}</p>
        <div className="flex">
          <AnimateChildren
            initial="hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="flex gap-2">
              <LoadProducts />
            </div>
          </AnimateChildren>
        </div>
      </div>
    </>
  );
};

export default Home;
