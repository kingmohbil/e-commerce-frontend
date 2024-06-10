import React from 'react';
import { Metadata } from 'next';

import SignUpForm from './components/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const page = () => {
  return (
    <div className="h-svh flex justify-center items-center">
      <SignUpForm />
    </div>
  );
};

export default page;
