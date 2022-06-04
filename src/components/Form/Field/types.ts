import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import type { WrapperProps } from '../../Wrapper/types';
import type { InputType, TextInputProps } from '../Input/types';

export interface FormFieldProps extends WrapperProps {
  error?: FieldError;
  errorMessage?: string;
  id?: string;
  input?: TextInputProps;
  label?: string;
  name: string;
  register?: UseFormRegisterReturn;
  type?: InputType;
}
