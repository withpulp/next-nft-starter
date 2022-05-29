import { CTACardProps } from '../../Card/CTA/types';
import { HeroProps, HeroPattern } from '../types';

export type PageHeroPattern = 'content' | 'default';

export interface PageHeroProps extends Omit<HeroProps, 'is'> {
  cta?: CTACardProps;
  hero?: HeroPattern;
  is?: PageHeroPattern;
}
