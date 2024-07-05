import React from 'react';

export async function generateMetadata({ params }: LocaleParams) {
  const { t } = await initTranslations(params.locale, ['login-form']);

  return {
    title: t('title.page'),
  };
}

import Form from './components/Form';

import initTranslations from '@/i18next';
import { TranslationsProvider } from '@/components';

const Page = async ({ params }: LocaleParams) => {
  const { resources } = await initTranslations(params.locale, ['login-form']);

  return (
    <div className="h-svh flex justify-center items-center">
      <TranslationsProvider
        locale={params.locale}
        namespaces={['login-form']}
        resources={resources}
      >
        <Form />
      </TranslationsProvider>
    </div>
  );
};

export default Page;
