'use client';
import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import Typography from '@/components/Typography';
import PasswordInput from '@/components/Inputs/PasswordInput';
import FormSection from '@/components/Forms/FormSection';

export interface SignInFormProps {}

const SignInForm: React.FC<SignInFormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const router = useRouter();

  const login = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/auth/login`, {
        email,
        password,
      });

      const access_token = res.data.accessToken;
      const refresh_token = res.data.refreshToken;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      setEmailError('');
      setPasswordError('');
      setIsLoading(false);

      router.push('/');
    } catch (error: any) {
      setPasswordError(error.response.data.errors?.password);
      setEmailError(error.response.data.error?.issues[0]?.message);

      if (password === '') setPasswordError('Password must not be empty');
      if (email === '') setEmailError('Email must not be empty');
      setIsLoading(false);
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
        placeholder="Enter your password"
        size="lg"
        value={password}
        variant="bordered"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        className="mt-3"
        color="primary"
        isLoading={isLoading}
        variant="solid"
        onClick={login}
      >
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
