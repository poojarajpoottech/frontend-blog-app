import axios from 'axios';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { UserContext } from '../../pages/_app';

export default function LogoutUser() {
  const { dispatch } = useContext(UserContext);

  const { push } = useRouter();
  const UserLogout = async () => {
    try {
      const response = await axios.get(`${process.env.HOST_API_KEY}/api/logout`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        Credentials: 'include',
      });
      const data = await response;
      if (!data.status === 200) {
        const error = new Error(data.error);
        throw error;
      } else {
        dispatch({ type: 'USER', payload: false });
        push('/auth/login-unprotected/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    UserLogout();
  });
  return (
    <Container>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack py={5} spacing={5}>
          <Typography variant="h6">You Logged Out!</Typography>
          <Button component={NextLink} variant="contained" rel="noopener" href="/">
            Go To Home Page
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
