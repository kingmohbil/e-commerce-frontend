import React from 'react';

import Form from './components/Form';

import { TranslationsProvider } from '@/components';
import initTranslations from '@/i18next';

export async function generateMetadata({ params }: LocaleParams) {
  const { t } = await initTranslations(params.locale, ['signup-form']);

  return {
    title: t('pageTitle'),
  };
}

const Page = async ({ params }: LocaleParams) => {
  const { resources } = await initTranslations(params.locale, ['signup-form']);

  return (
    <div className="flex flex-1 justify-center items-center">
      <TranslationsProvider
        locale={params.locale}
        namespaces={['signup-form']}
        resources={resources}
      >
        <Form />
      </TranslationsProvider>
    </div>
  );
};

export default Page;
