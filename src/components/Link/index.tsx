import clsx from 'clsx';
import Link from 'next/link';
import React, { forwardRef } from 'react';

import type { InnerRef } from '../Box/types';
import { Text } from '../Text';
import type { LinkColor, NextLinkProps } from './types';

export const getLinkColor = (color: LinkColor) => {
  switch (color) {
    case 'dark':
      return 'text-contrast focus:text-contrast-accent hover:text-contrast-accent';
    case 'light':
      return 'text-action focus:text-action-accent hover:text-action-accent';
    case 'primary':
      return 'text-primary focus:text-primary-accent hover:text-primary-accent';
    case 'secondary':
      return 'text-secondary focus:text-secondary-accent hover:text-secondary-accent';
    case 'inherit':
    default:
      return 'text-inherit focus:text-inherit hover:text-inherit';
  }
};

export const NextLink = forwardRef(
  (
    {
      children,
      className,
      color,
      href,
      is,
      linkProps,
      rel,
      size = 'inherit',
      target,
      text,
      ...rest
    }: NextLinkProps,
    ref: InnerRef<HTMLAnchorElement>
  ) => (
    <Link {...linkProps} href={href} passHref>
      <a rel={rel} target={target}>
        <Text
          is={text}
          innerRef={ref}
          size={size}
          {...rest}
          className={clsx(
            'cursor-pointer',
            'underline hover:underline',
            color && getLinkColor(color),
            is === 'accented' &&
              'text-inherit hover:text-accent focus:text-accent',
            is === 'blended' && 'text-inherit no-underline',
            className
          )}
        >
          {children}
        </Text>
      </a>
    </Link>
  )
);

NextLink.displayName = 'NextLink';
