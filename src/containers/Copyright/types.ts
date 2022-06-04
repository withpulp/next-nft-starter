import type { NextLinkProps as LinkProps } from '../../components/Link/types';
import type { TextProps } from '../../components/Text/types';
import type { WrapperProps } from '../../components/Wrapper/types';

export interface CopyrightProps extends WrapperProps {
  link?: LinkProps;
  showAuthor?: boolean;
  showCopyright?: boolean;
  showMessage?: boolean;
  showOrg?: boolean;
  text?: TextProps;
}
