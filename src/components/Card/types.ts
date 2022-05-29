import { BoxProps } from '../Box/types';
import { TextProps } from '../Text/types';

export interface CardProps extends BoxProps {
  subtitle?: string;
  subtitleProps?: TextProps;
  title?: string;
  titleProps?: TextProps;
}
