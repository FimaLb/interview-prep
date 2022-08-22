import NextLink from 'next/link';
import { Link as MuiLink } from '@mui/material';

import type { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
}

export default function Link(props: LinkProps) {
  const { href, children } = props;

  return (
    <MuiLink component={NextLink} href={href}>
      {children}
    </MuiLink>
  );
}
