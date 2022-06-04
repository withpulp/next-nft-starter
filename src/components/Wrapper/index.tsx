import clsx from 'clsx';
import React from 'react';

import { Box } from '../Box';
import type { WrapperProps } from './types';

export const Wrapper = <E extends HTMLElement = HTMLDivElement>({
  as = 'section',
  children,
  className,
  is = 'col',
  wrap = 'nowrap',
  ...rest
}: WrapperProps<E>) => (
  <Box
    as={as}
    {...rest}
    className={clsx(
      is === 'col' && 'flex flex-col',
      is === 'col-reverse' && 'flex flex-col-reverse',
      is === 'row' && 'flex flex-row',
      is === 'row-reverse' && 'flex flex-row-reverse',
      wrap === 'nowrap' && 'flex-nowrap',
      wrap === 'reverse' && 'flex-wrap-reverse',
      wrap === 'wrap' && 'flex-wrap',
      className
    )}
  >
    {children}
  </Box>
);
