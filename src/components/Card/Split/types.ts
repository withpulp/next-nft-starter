import type { ReactNode } from 'react';

import type { FlexBoxProps } from '@/components/Box/Flex/types';

import type { CardProps } from '../types';

export type SplitCardPattern = 'responsive' | 'static';

export interface SplitCardProps extends CardProps {
  is?: SplitCardPattern;
  isReversed?: boolean;
  left?: Element | ReactNode;
  leftProps?: FlexBoxProps;
  right?: Element | ReactNode;
  rightProps?: FlexBoxProps;
  split?: FlexBoxProps;
}
