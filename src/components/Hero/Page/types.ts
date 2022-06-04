import type { CTACardProps } from '../../Card/CTA/types';
import type { HeroPattern, HeroProps } from '../types';

export type PageHeroPattern = 'content' | 'default';

export interface PageHeroProps extends Omit<HeroProps, 'is'> {
  cta?: CTACardProps;
  hero?: HeroPattern;
  is?: PageHeroPattern;
}
