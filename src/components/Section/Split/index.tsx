import clsx from 'clsx';
import React from 'react';

import { FlexBox } from '../../Box/Flex';
import { Section } from '..';
import type { SplitSectionProps } from './types';

export const SplitSection = ({
  children,
  className,
  container,
  isResponsive,
  isReversed,
  left,
  leftProps,
  right,
  rightProps,
  split,
  ...rest
}: SplitSectionProps) => (
  <Section
    className={className}
    container={{
      ...container,
      className: clsx(
        isResponsive
          ? 'flex flex-col flex-nowrap items-start md:flex-row md:flex-wrap'
          : 'flex flex-row flex-wrap items-center',
        'content-between justify-between',
        container?.className
      ),
    }}
    {...rest}
  >
    {isReversed
      ? right && (
          <FlexBox {...split} {...rightProps}>
            {right}
          </FlexBox>
        )
      : left && (
          <FlexBox {...split} {...leftProps}>
            {left}
          </FlexBox>
        )}
    {children}
    {isReversed
      ? left && (
          <FlexBox {...split} {...leftProps}>
            {left}
          </FlexBox>
        )
      : right && (
          <FlexBox {...split} {...rightProps}>
            {right}
          </FlexBox>
        )}
  </Section>
);
