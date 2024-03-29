import type { ReactNode } from 'react';

import type { BoxProps } from '../Box/types';
import type { TextProps } from '../Text/types';

export interface CardProps extends BoxProps {
  header?: ReactNode;
  spring?: any;
  subtitle?: string;
  subtitleProps?: TextProps;
  title?: string;
  titleProps?: TextProps;
}
