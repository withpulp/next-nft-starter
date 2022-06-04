import clsx from 'clsx';
import React from 'react';

import { Box } from '..';
import type { BoxProps } from '../types';

export const GridBox = ({ children, className, ...rest }: BoxProps) => (
  <Box {...rest} className={clsx('grid', className)}>
    {children}
  </Box>
);
