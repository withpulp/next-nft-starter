import type { ReactNode } from 'react';

import type { FooterProps } from '../../components/Footer/types';
import type { HeaderProps } from '../../components/Header/types';
import type { PageHeelProps } from '../../components/Heel/Page/types';
import type { PageHeroProps } from '../../components/Hero/Page/types';
import type { MainProps } from '../../components/Main/types';
import type { SEOProps } from '../../components/SEO/types';
import type {
  WrapperPattern,
  WrapperProps,
} from '../../components/Wrapper/types';

export type PageLayoutPattern = 'content' | 'default';

export interface PageLayoutProps extends Omit<WrapperProps, 'is'> {
  className?: string;
  footer?: Element | ReactNode;
  footerProps?: FooterProps;
  header?: Element | ReactNode;
  headerProps?: HeaderProps;
  heel?: Element | ReactNode;
  heelProps?: PageHeelProps;
  hero?: Element | ReactNode;
  heroProps?: PageHeroProps;
  is?: PageLayoutPattern;
  mainProps?: MainProps;
  seo?: SEOProps;
  showFooter?: boolean;
  showHeader?: boolean;
  showHeel?: boolean;
  showHero?: boolean;
  wrapper?: WrapperPattern;
}
