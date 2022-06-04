import React from 'react';

import { PageLayout } from '../../layouts/Page';
import type { PageTemplateProps } from './types';

export const PageTemplate = ({
  children,
  cta,
  description,
  footerProps,
  headerProps,
  heading,
  heroProps,
  images,
  layout,
  seo,
  subheading,
  title,
  ...rest
}: PageTemplateProps) => (
  <PageLayout
    is={layout}
    {...rest}
    seo={{
      description,
      images,
      title,
      ...seo,
    }}
    headerProps={{
      is: 'page',
      ...headerProps,
    }}
    heroProps={{
      ...heroProps,
      caption: {
        heading,
        subheading,
        ...heroProps?.caption,
      },
      cta: {
        ...cta,
        ...heroProps?.cta,
      },
    }}
    footerProps={{
      is: 'page',
      ...footerProps,
    }}
  >
    {children}
  </PageLayout>
);
