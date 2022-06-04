import clsx from 'clsx';

import { Card } from '..';
import type { CTACardProps } from './types';

export const CTACard = ({
  buttons,
  children,
  className,
  is,
  ...rest
}: CTACardProps) => (
  <Card {...rest} className={clsx(is === 'default' && 'm-0 p-0', className)}>
    {children}
    {buttons}
  </Card>
);
