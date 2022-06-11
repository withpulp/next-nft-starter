import clsx from 'clsx';

import { Card } from '..';
import type { FeatureCardProps } from './types';

export const FeatureCard = ({
  children,
  className,
  footer,
  is = 'bordered',
  ...rest
}: FeatureCardProps) => (
  <>
    <Card
      {...rest}
      className={clsx(is === 'bordered' && 'border-2 border-solid', className)}
    >
      {children}
    </Card>
    {footer}
  </>
);
