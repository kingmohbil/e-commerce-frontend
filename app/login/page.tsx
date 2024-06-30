import React from 'react';
import { Metadata } from 'next';

import Form from './components/Form';

import messages from '@/config/languages/en';

export const metadata: Metadata = {
  title: messages.loginForm.title,
};

const page = () => {
  return (
    <div className="h-svh flex justify-center items-center">
      <Form />
    </div>
  );
};

export default page;
