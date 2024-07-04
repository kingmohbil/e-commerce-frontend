import React from 'react';
import { Metadata } from 'next';

import Form from './components/Form';

import initTranslations from '@/i18next';
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import messages from '@/config/languages/en';

export const metadata: Metadata = {
  title: messages.loginForm.title,
};

const Page = async ({ params }: LocaleParams) => {
  const { t, resources } = await initTranslations(params.locale, ['login-form']);

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
