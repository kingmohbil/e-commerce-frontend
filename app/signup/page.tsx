import React from 'react';
import { Metadata } from 'next';

import Form from './components/Form';

import text from '@/config/languages/en/text.json';

export const metadata: Metadata = {
  title: text.screens.signup.title.page,
};

const Page = async ({}) => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Form />
    </div>
  );
};

export default Page;
