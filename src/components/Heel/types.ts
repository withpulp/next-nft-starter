import type { BoxColor } from '../Box/types';
import type { SectionProps } from '../Section/types';
import type { TextProps } from '../Text/types';

export interface HeelProps extends Omit<SectionProps, 'color' | 'form'> {
  color?: BoxColor;
  heading?: string;
  headingProps?: TextProps;
  subheading?: string;
  subheadingProps?: TextProps;
}
