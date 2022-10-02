import type { CardProps } from '../types';

export type FeatureCardPattern = 'bordered';

export interface FeatureCardProps extends CardProps {
  is?: FeatureCardPattern;
}
