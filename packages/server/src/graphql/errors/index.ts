import { REGISTER_PASSWORD_WRONG } from './user/register';

interface Errors {
  [key: string]: {
    key: string;
    message: string;
    formField?: string;
  };
}

const Errors: Errors = {
  REGISTER_PASSWORD_WRONG,
};

export default Errors;
