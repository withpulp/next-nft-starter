import type { ElementType, HTMLProps, MutableRefObject } from 'react';

export type InnerRef<E> =
  | ((instance: E | null) => void)
  | MutableRefObject<E | null>
  | null;

export type BoxColor =
  | 'dark'
  | 'default'
  | 'inherit'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'transparent';

export type BoxPosition = 'absolute' | 'fixed' | 'relative';

export interface BoxProps<E extends HTMLElement = HTMLDivElement>
  extends Omit<
    HTMLProps<E>,
    'as' | 'background' | 'children' | 'color' | 'content' | 'list' | 'to'
  > {
  as?: ElementType;
  children?: any;
  color?: BoxColor;
  innerRef?: InnerRef<E>;
  position?: BoxPosition;
  style?: any;
}
