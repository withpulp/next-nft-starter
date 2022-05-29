import React from 'react';

import clsx from 'clsx';

import { Box } from '../Box';
import { Text } from '../Text';
import { CardProps } from './types';

export const Card = ({
  children,
  className,
  is = 'default',
  subtitle,
  subtitleProps,
  title,
  titleProps,
  ...rest
}: CardProps) => (
  <Box
    {...rest}
    className={clsx(
      is === 'default' && 'inline-flex flex-col flex-nowrap',
      className
    )}
  >
    {title && (
      <Text as="h4" is="title" {...titleProps}>
        {title}
      </Text>
    )}
    {subtitle && (
      <Text as="h5" is="subtitle" {...subtitleProps}>
        {subtitle}
      </Text>
    )}
    {children}
  </Box>
);
