import clsx from 'clsx';
import React from 'react';

import styles from './Input.module.scss';
import type { InputProps, TextInputProps } from './types';

export const TextInput = <E extends HTMLInputElement = HTMLInputElement>({
  className,
  id,
  name,
  register,
  rows = 11,
  type = 'text',
  ...rest
}: TextInputProps<E>) => {
  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={name}
        rows={rows}
        {...register}
        className={clsx(styles.textInput, className)}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      {...register}
      {...(rest as InputProps)}
      className={clsx(styles.textInput, className)}
    />
  );
};
