import clsx from 'clsx';
import React from 'react';

import { getTextSize, Text } from '../Text';
import type { TextPattern } from '../Text/types';
import styles from './Button.module.scss';
import type { ButtonProps } from './types';

export const Button = ({
  as = 'button',
  children,
  className,
  color,
  is = 'contained',
  size = 'md',
  text,
  type,
  ...rest
}: ButtonProps) => {
  const textSize: TextPattern = text || getTextSize(size);

  return (
    <Text
      as={as}
      is={textSize}
      type={type}
      {...rest}
      className={clsx(
        styles.defaultButton,
        'duration-250 transition-colors ease-in-out',
        color === 'primary' && styles.primaryButton,
        color === 'secondary' && styles.secondaryButton,
        color === 'inherit' && styles.inheritButton,
        color === 'transparent' && styles.transparentButton,
        is === 'contained' && styles.containedButton,
        is === 'icon' && styles.iconButton,
        is === 'outlined' && styles.outlinedButton,
        is === 'text' && styles.textButton,
        size === 'xs' && 'border py-1 px-2 text-1/2 font-light lg:px-3',
        size === 'sm' &&
          'border py-1 px-3 text-3/4 font-normal md:py-2 lg:px-4',
        size === 'md' && 'border-2 py-2 px-4 text-full md:px-5 xl:py-3 xl:px-6',
        size === 'lg' && 'border-2 py-3 px-5 md:px-6 xl:py-4 xl:px-7',
        size === 'xl' && 'border-3 py-4 px-6 md:px-7 xl:py-5 xl:px-8',
        size === '2xl' && 'border-3 py-5 px-7 md:px-8 xl:py-6 xl:px-9',
        size === '3xl' && 'border-4 py-6 px-8 md:px-8 xl:py-7 xl:px-12',
        size === '4xl' && 'border-5 py-7 px-9 md:px-8 xl:py-8 xl:px-14',
        size === '5xl' && 'border-6 py-8 px-10 md:px-8 xl:py-9 xl:px-16',
        className
      )}
    >
      {children}
    </Text>
  );
};
