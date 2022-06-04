import clsx from 'clsx';
import { random } from 'lodash';
import React from 'react';

import { Text } from '../Text';
import type { TextProps } from '../Text/types';
import { ListItem } from './Item';
import type { ListItemProps } from './Item/types';
import type { ListProps } from './types';

export const List = <E extends HTMLElement = HTMLUListElement>({
  as = 'ul',
  children,
  className,
  footer,
  header,
  is,
  items = undefined,
  text,
  ...rest
}: ListProps<E>) => (
  <Text
    as={as}
    is={text}
    {...(rest as TextProps)}
    className={clsx(
      'list-square',
      is === 'default' && 'flex flex-full flex-col flex-wrap',
      is === 'inline' && 'flex flex-row flex-wrap',
      className
    )}
  >
    {header}
    {items?.length &&
      items.map((item) => (
        <ListItem key={random(16)} {...(item as ListItemProps)}>
          {item.children}
        </ListItem>
      ))}
    {children}
    {footer}
  </Text>
);
