'use client';
import React, { FormEvent, useState } from 'react';
import { Button, Input, DateInput, DateValue, Card } from '@nextui-org/react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import Typography from '@/components/Typography';
import PasswordInput from '@/components/Inputs/PasswordInput';

export interface ErrorMessagesType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
}

export interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = ({}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});

  const signup = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true);
    try {
      if (confirmPassword === password) {
        await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/auth/signup`, {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          dateOfBirth,
        });

        setErrorMessages({});
        router.push('/signin');
      } else setErrorMessages({ ...errorMessages, confirmPassword: 'passwords does not match' });
      setIsLoading(false);
    } catch (error: any) {
      const errors = error.response.data.error?.issues;
      const newErrors: any = {};

      errors?.forEach((error: any) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrorMessages(newErrors);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={signup}>
      <Card className="w-96 flex items-center p-10 py-5 gap-3">
        <Typography className="pb-5" variant="h3">
          Sign Up
        </Typography>
        <Input
          errorMessage={errorMessages.firstName}
          isInvalid={!!errorMessages.firstName}
          label="First Name"
          value={firstName}
          variant="bordered"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          errorMessage={errorMessages.lastName}
          isInvalid={!!errorMessages.lastName}
          label="Last Name"
          value={lastName}
          variant="bordered"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          errorMessage={errorMessages.email}
          isInvalid={!!errorMessages.email}
          label="Email"
          value={email}
          variant="bordered"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          errorMessage={errorMessages.password}
          isInvalid={!!errorMessages.password}
          label="Password"
          value={password}
          variant="bordered"
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          errorMessage={errorMessages.confirmPassword}
          isInvalid={!!errorMessages.confirmPassword}
          label="Confirm Password"
          value={confirmPassword}
          variant="bordered"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          errorMessage={errorMessages.phoneNumber}
          isInvalid={!!errorMessages.phoneNumber}
          label="Phone number"
          value={phoneNumber}
          variant="bordered"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <DateInput
          errorMessage={errorMessages.dateOfBirth}
          isInvalid={!!errorMessages.dateOfBirth}
          label="Date Of Birth"
          variant="bordered"
          onChange={(e: DateValue) =>
            setDateOfBirth(new Date(e.year, e.month, e.day).toISOString())
          }
        />
        <Button
          fullWidth
          className="mt-3"
          color="primary"
          isLoading={isLoading}
          type='submit'
          variant="solid"
        >
          Sign Up
        </Button>
        <span className="text-sm w-full">
          Already have an account? &nbsp;
          <Link className="text-sky-500" href="/signin">
            Sign In now
          </Link>
        </span>
      </Card>
    </form>
  );
};

export default SignUpForm;
