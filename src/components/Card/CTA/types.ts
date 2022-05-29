import { ReactNode } from 'react';

import { CardProps } from '../types';

export type CTACardPattern = 'default' | 'full';

export interface CTACardButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
}

export interface CTACardProps extends CardProps {
  is?: CTACardPattern;
  buttons?: ReactNode;
}
