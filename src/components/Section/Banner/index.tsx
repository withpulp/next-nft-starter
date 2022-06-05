import clsx from 'clsx';
import React from 'react';

import { Caption } from '@/components/Caption';

import { Section } from '..';
import type { BannerSectionProps } from './types';

export const BannerSection = ({
  banner,
  caption,
  children,
  className,
  container,
  heading,
  headingProps,
  is,
  subheading,
  subheadingProps,
  ...rest
}: BannerSectionProps) => (
  <Section
    className={className}
    container={{
      ...container,
      className: clsx(
        is === 'full' && 'm-0 p-0',
        'content-center items-center justify-center',
        container?.className
      ),
    }}
    isContained={is !== 'full'}
    {...rest}
  >
    {banner}
    {(caption || heading || subheading) && (
      <Caption
        heading={heading}
        headingProps={headingProps}
        subheading={subheading}
        subheadingProps={subheadingProps}
        {...caption}
      />
    )}
    {children}
  </Section>
);
