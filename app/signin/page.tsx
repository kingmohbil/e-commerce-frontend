import React from 'react';
import { Metadata } from 'next';

import SignInForm from './components/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In',
};

const page = () => {
  return (
    <div className="h-svh flex justify-center items-center">
      <SignInForm />
    </div>
  );
};

export default page;
