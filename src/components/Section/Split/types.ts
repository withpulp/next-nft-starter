import type { ReactNode } from 'react';

import type { FlexBoxProps } from '../../Box/Flex/types';
import type { SectionProps } from '../types';

export interface SplitSectionProps extends SectionProps {
  isResponsive?: boolean;
  isReversed?: boolean;
  left?: Element | ReactNode;
  leftProps?: FlexBoxProps;
  right?: Element | ReactNode;
  rightProps?: FlexBoxProps;
  split?: FlexBoxProps;
}
