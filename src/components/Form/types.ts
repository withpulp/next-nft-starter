import type { SubmitHandler } from 'react-hook-form';

import type { FlexBoxProps } from '../Box/Flex/types';
import type { BoxProps } from '../Box/types';
import type { ButtonProps } from '../Button/types';

export interface FormProps extends BoxProps {
  actions?: FlexBoxProps;
  button?: boolean | string;
  buttonProps?: ButtonProps;
  className?: string;
  errorMessage?: boolean | string;
  hasErrors?: boolean;
  isSubmitSuccessful?: boolean;
  method?: string;
  name?: string;
  successMessage?: boolean | string;
  onSubmit?: SubmitHandler<any>;
}
