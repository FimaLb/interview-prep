import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from './Link';

export default function Header() {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', gap: '16px' }}>
        <Link href="/">
          <Typography sx={{ cursor: 'pointer' }} variant="h4">
            Home
          </Typography>
        </Link>
        <Link href="/about">
          <Typography sx={{ cursor: 'pointer' }} variant="h5">
            About
          </Typography>
        </Link>
        <Link href="/users">
          <Typography sx={{ cursor: 'pointer' }} variant="h5">
            Users List
          </Typography>
        </Link>
        | <a href="/api/users">Users API</a>
      </Toolbar>
    </AppBar>
  );
}
