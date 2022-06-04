import type { ReactNode } from 'react';

import type { ContainerProps } from '../../components/Container/types';
import type { FooterProps } from '../../components/Footer/types';
import type { HeaderProps } from '../../components/Header/types';
import type { MainProps } from '../../components/Main/types';
import type { SectionProps } from '../../components/Section/types';
import type { SEOProps } from '../../components/SEO/types';
import type { BrandProps } from '../../containers/Brand/types';
import type { ThemeSwitchProps } from '../../contexts/Theme/types';

export interface PanelLayoutProps
  extends Omit<SectionProps, 'footer' | 'header' | 'is'> {
  brand?: BrandProps;
  footer?: Element | ReactNode;
  footerProps?: FooterProps;
  header?: Element | ReactNode;
  headerProps?: HeaderProps;
  mainProps?: MainProps;
  panelProps?: ContainerProps;
  seo?: SEOProps;
  showFooter?: boolean;
  showHeader?: boolean;
  themeSwitch?: ThemeSwitchProps;
}
