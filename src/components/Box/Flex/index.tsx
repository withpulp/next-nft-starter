import clsx from 'clsx';
import React from 'react';

import { Box } from '..';
import type { FlexBoxProps } from './types';

export const FlexBox = ({
  children,
  className,
  is = 'default',
  ...rest
}: FlexBoxProps) => (
  <Box
    {...rest}
    className={clsx(
      'flex',
      is === 'default' && 'flex-1',
      is === 'full' && 'flex-full',
      className
    )}
  >
    {children}
  </Box>
);
