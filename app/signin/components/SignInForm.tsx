'use client';
import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import axios from 'axios';

import Typography from '@/components/Typography';
import PasswordInput from '@/components/Inputs/PasswordInput';
import FormSection from '@/components/Forms/FormSection';

export interface SignInFormProps {}

const SignInForm: React.FC<SignInFormProps> = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const login = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/auth/login`, {
        email,
        password,
      });

      const access_token = res.data.access_token;
      const refresh_token = res.data.refresh_token;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      setEmailError('');
      setPasswordError('');
    } catch (error) {
      setEmailError('Email is incorrect');
      setPasswordError('Password is incorrect');
    }
  };

  return (
    <FormSection>
      <Typography className="pb-10" variant="h3">
        Sign In
      </Typography>
      <Input
        errorMessage={emailError}
        isInvalid={!!emailError}
        placeholder="example@domain.com"
        size="lg"
        value={email}
        variant="bordered"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        errorMessage={passwordError}
        isInvalid={!!passwordError}
        size="lg"
        value={password}
        variant="bordered"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button fullWidth className="mt-3" color="primary" variant="solid" onClick={login}>
        Sign In
      </Button>
      <span className="text-sm w-full">
        You don&apos;t have account? &nbsp;
        <Link className="text-sky-500" href="/signup">
          Register now
        </Link>
      </span>
    </FormSection>
  );
};

export default SignInForm;
