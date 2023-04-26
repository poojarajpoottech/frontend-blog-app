// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// auth

import LoginLayout from '../../layouts/login';

import AuthLoginForm from './AuthLoginForm';

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Sign in to designwithsatya</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link component={NextLink} href="/auth/register-unprotected" variant="subtitle2">
            Create an account
          </Link>
        </Stack>
      </Stack>

      <AuthLoginForm />
    </LoginLayout>
  );
}
