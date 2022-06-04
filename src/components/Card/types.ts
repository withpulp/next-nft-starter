import type { BoxProps } from '../Box/types';
import type { TextProps } from '../Text/types';

export interface CardProps extends BoxProps {
  subtitle?: string;
  subtitleProps?: TextProps;
  title?: string;
  titleProps?: TextProps;
}
