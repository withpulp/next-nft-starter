import clsx from 'clsx';
import React from 'react';

import { Box } from '../Box';
import type { ContainerProps } from './types';

export const Container = <E extends HTMLElement = HTMLDivElement>({
  as = 'figure',
  children,
  className,
  is = 'default',
  ...rest
}: ContainerProps<E>) => (
  <Box
    as={as}
    {...rest}
    className={clsx(
      is === 'fluid' ? 'mx-auto w-full flex-1 p-0' : 'container',
      is === 'card' && 'max-w-screen-xs',
      is === 'content' && 'max-w-screen-lg',
      is === 'default' && 'max-w-screen-xl',
      is === 'panel' && 'max-w-screen-sm',
      is === 'wide' && 'max-w-screen-2xl',
      className
    )}
  >
    {children}
  </Box>
);
