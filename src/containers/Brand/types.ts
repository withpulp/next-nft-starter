import type { ImageProps } from 'next/image';
import type { ReactNode } from 'react';

import type {
  TextPattern,
  TextProps,
  TextSize,
} from '../../components/Text/types';

export interface BrandProps extends Omit<TextProps, 'is' | 'name' | 'size'> {
  href?: string;
  logo?: Element | ReactNode;
  logoProps?: ImageProps;
  multiplier?: number;
  name?: Element | ReactNode | string;
  showLink?: boolean;
  showLogo?: boolean;
  showName?: boolean;
  size?: TextSize;
  text?: TextPattern;
}
