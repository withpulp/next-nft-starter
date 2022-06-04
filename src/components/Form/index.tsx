import clsx from 'clsx';
import React from 'react';

import { Box } from '../Box';
import { FlexBox } from '../Box/Flex';
import { Button } from '../Button';
import { Text } from '../Text';
import { FormField } from './Field';
import type { FormFieldProps } from './Field/types';
import type { FormProps } from './types';

export const renderField = (field: FormFieldProps) => {
  switch (field.type) {
    case 'text':
    default:
      return <FormField {...field} />;
  }
};

export const encodeData = (data: any) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export const Form = ({
  as = 'form',
  actions,
  button = 'Submit',
  buttonProps,
  children,
  errorMessage = 'Fill out all the required fields and try again.',
  hasErrors,
  isSubmitSuccessful,
  name,
  successMessage,
  onSubmit,
  ...rest
}: FormProps) => {
  return (
    <Box as={as} name={name} onSubmit={onSubmit} {...rest}>
      {children}
      {button && (
        <FlexBox
          {...actions}
          className={clsx(
            'order-last col-span-full mt-4 flex flex-col flex-nowrap items-start justify-start gap-2',
            actions?.className
          )}
        >
          <Button color="primary" type="submit" {...buttonProps}>
            {button}
          </Button>
          {isSubmitSuccessful
            ? successMessage && (
                <Text className="text-service-pass">{successMessage}</Text>
              )
            : errorMessage &&
              hasErrors && (
                <Text className="text-service-fail">{errorMessage}</Text>
              )}
        </FlexBox>
      )}
    </Box>
  );
};
