import PasswordValidator from 'password-validator';

import { userConfig } from '@/config';

const passwordValidator = new PasswordValidator();

passwordValidator.is().min(userConfig.validation.password.length);

if (userConfig.validation.password.upperCase > 0)
  passwordValidator.has().uppercase(userConfig.validation.password.upperCase);
if (userConfig.validation.password.lowerCase > 0)
  passwordValidator.has().lowercase(userConfig.validation.password.lowerCase);
if (userConfig.validation.password.digits > 0)
  passwordValidator.has().digits(userConfig.validation.password.digits);
if (userConfig.validation.password.spaces === 0) passwordValidator.has().not().spaces();
else passwordValidator.has().spaces(userConfig.validation.password.spaces);
if (userConfig.validation.password.symbols > 0)
  passwordValidator.has().symbols(userConfig.validation.password.symbols);
else passwordValidator.has().not().symbols();

export default passwordValidator;
