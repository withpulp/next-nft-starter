import type { ReactNode } from 'react';

import type { BoxProps } from '../Box/types';
import type { NextLinkProps as LinkProps } from '../Link/types';
import type { TextAlign, TextProps } from '../Text/types';

export interface CaptionProps extends BoxProps {
  align?: TextAlign;
  content?: Element | ReactNode;
  footer?: Element | ReactNode;
  header?: Element | ReactNode;
  heading?: string;
  headingLink?: string;
  headingLinkProps?: LinkProps;
  headingProps?: TextProps;
  meta?: string;
  metaLink?: string;
  metaLinkProps?: LinkProps;
  metaProps?: TextProps;
  spring?: any;
  subheading?: string;
  subheadingProps?: TextProps;
}
