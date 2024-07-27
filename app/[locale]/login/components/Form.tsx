'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { login } from './action';

import Typography from '@/components/Typography';
import PasswordInput from '@/components/inputs/PasswordInput';
import FormSection from '@/components/forms/FormSection';
import { ServerActionButton } from '@/components';
import paths from '@/config/paths';

export interface LogInFormProps {}

const LogInForm: React.FC<LogInFormProps> = ({}) => {
  const [data, action] = useFormState(login, { success: false });
  const { t } = useTranslation();

  return (
    <FormSection action={action}>
      <Typography className="pb-10" variant="h3">
        {t('title.form')}
      </Typography>
      <Input
        isRequired
        errorMessage={data?.errors?.email}
        id="email"
        isInvalid={!!data?.errors?.email}
        label={t('label.email')}
        labelPlacement="outside"
        name="email"
        placeholder={t('placeholder.email')}
        size="lg"
        variant="bordered"
      />
      <PasswordInput
        isRequired
        errorMessage={data?.errors?.password}
        id="password"
        isInvalid={!!data?.errors?.password}
        label={t('label.password')}
        labelPlacement="outside"
        name="password"
        placeholder={t('placeholder.password')}
        size="lg"
        variant="bordered"
      />
      <ServerActionButton fullWidth className="mt-3" color="primary" variant="solid">
        {t('button.submit')}
      </ServerActionButton>
      <span className="text-sm w-full">
        {t('doesHaveAccount')} &nbsp;
        <Link className="text-sky-500" href={paths.signupPage}>
          {t('registerNow')}
        </Link>
      </span>
    </FormSection>
  );
};

export default LogInForm;
