import type { ReactNode } from 'react';

import type { TextProps } from '@/components/Text/types';

import type { SectionPattern, SectionProps } from '../types';

export type BannerSectionPattern = 'default' | 'full';

export interface BannerSectionProps extends Omit<SectionProps, 'is'> {
  banner?: ReactNode;
  heading?: string;
  headingProps?: TextProps;
  is?: BannerSectionPattern;
  section?: SectionPattern;
  subheading?: string;
  subheadingProps?: TextProps;
}
