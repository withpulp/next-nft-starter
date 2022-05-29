import clsx from 'clsx';

import { Card } from '..';
import { CTACardProps } from './types';

export const CTACard = ({
  buttons,
  children,
  className,
  is,
  ...rest
}: CTACardProps) => (
  <Card {...rest} className={clsx(is === 'default' && 'p-0 m-0', className)}>
    {children}
    {buttons}
  </Card>
);
