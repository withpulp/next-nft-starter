import clsx from 'clsx';
import React from 'react';

import { List } from '../List';
import type { NavProps } from './types';

export const Nav = ({
  as = 'nav',
  children,
  className,
  is = 'default',
  list = 'inline',
  text = 'meta',
  ...rest
}: NavProps) => (
  <>
    <List
      as={as}
      is={list}
      text={text}
      {...rest}
      className={clsx(
        'order-1 flex flex-row flex-wrap items-center justify-end',
        is === 'default' &&
          'space-x-4 xs:space-x-5 sm:space-x-6 md:space-x-7 lg:space-x-8 xl:space-x-9',
        is === 'menu' && 'flex-col flex-nowrap md:flex-row md:flex-wrap',
        is === 'metro' && 'grid gap-2 md:gap-3 xl:gap-4',
        className
      )}
    >
      {children}
    </List>
  </>
);
