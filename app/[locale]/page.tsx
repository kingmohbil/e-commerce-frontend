import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

import { navbarWidth } from './layout';
import CategoriesMenu from './layout-components/CategoriesMenu';

import { request } from '@/utils';
import { ProductCard } from '@/components';
import initTranslations from '@/i18next';

const LoadProducts = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['common']);
  const { data } = await request.get<{ products: ProductType[] }>('/product?limit=3&page=0');

  return data.products.map((product) => (
    <ProductCard
      key={product._id}
      action={
        <Button color="primary" radius="none" variant="shadow">
          {t('addToCartButtonText')}
        </Button>
      }
      className="w-[500px]"
      product={product}
    />
  ));
};

interface HomeProps {
  params: {
    locale: string;
  };
}

const Home: FC<HomeProps> = async ({ params }) => {
  const { t } = await initTranslations(params.locale, ['home']);

  return (
    <>
      <div className={'flex relative'} style={{ minHeight: `calc(100vh - ${navbarWidth}px)` }}>
        <Image fill alt="lake picture" src="/banner.jpg" />
      </div>
      <div className="flex gap-10 py-5 px-40 flex-wrap justify-between flex-col text-center">
        <p className="text-5xl text-white capitalize">{t('featuredProducts')}</p>
        <div className="flex">
          <LoadProducts {...params} />
        </div>
      </div>
    </>
  );
};

export default Home;
