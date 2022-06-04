import type { ReactNode } from 'react';

import type { CopyrightProps } from '../../containers/Copyright/types';
import type { ThemeSwitchProps } from '../../contexts/Theme/types';
import type { BoxColor } from '../Box/types';
import type { LinkColor } from '../Link/types';
import type { SectionProps } from '../Section/types';

export type FooterPattern = 'dashboard' | 'default' | 'page';

export interface FooterProps extends Omit<SectionProps, 'color' | 'is'> {
  color?: BoxColor | LinkColor;
  copyright?: Element | ReactNode;
  copyrightProps?: CopyrightProps;
  is?: FooterPattern;
  showCopyright?: boolean;
  showThemeSwitch?: boolean;
  themeSwitch?: ThemeSwitchProps;
}
