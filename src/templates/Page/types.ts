import type { CTACardProps } from '../../components/Card/CTA/types';
import type { SEOImage } from '../../components/SEO/types';
import type {
  PageLayoutPattern,
  PageLayoutProps,
} from '../../layouts/Page/types';

export interface PageTemplateProps extends Omit<PageLayoutProps, 'is'> {
  cta?: CTACardProps;
  description?: string;
  heading?: string;
  images?: SEOImage[];
  layout?: PageLayoutPattern;
  subheading?: string;
  title?: string;
}
