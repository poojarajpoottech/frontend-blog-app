import React from 'react';
import Head from 'next/head';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

import Image from 'next/image';
import MainLayout from '../layouts/main';

import { HelpHero } from '../sections/help';

const MainStyle = styled(Box)(() => ({
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
}));

HelpUsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default function HelpUsPage() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title> Help | Designwithsatya</title>
      </Head>
      <HelpHero />
      <Container>
        <Box sx={{ mb: 5, mt: 5 }}>
          <Typography variant="subtitle1">
            You all are always there, Again I need your support and love (in the form of very little
            Money, sorry :( ). I left my job and Now I want to do something on my own and this will
            not possible without your love and support.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <span style={{ color: 'purple' }}>
              So I am collecting only 50Rs for this project Source Code
            </span>
            . I hope you all understand my feeling and my situation.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Here is my PAYTM, GOOGLE PAY, PHONE PAY Number 7869351845. You have to pay 50Rs on this
            Number. Thanks in advance.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Uper diya gaya number 7869351845 me PAYTM, GOOGLE PAY, PHONE PAY tino me koi ek online
            payment aap kar sakte ho. Only 50RS pay krna hai. Ek bar hone ke baad screenshot muje
            <span style={{ color: 'purple' }}>WhatsApp me HERE</span> same number par kr dijiyega.
            Me apko source code share kr doonga. Dhanyawad.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            **Those who Pay <span style={{ color: 'purple' }}>WhatsApp me HERE</span> with a
            screenshot of payment. And, only those will get the source code**
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
            }}
          >
            Thank You, you gave your time and read all these. Have a great day.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <span style={{ color: 'purple' }}>Here is the PAYTM QR CODE</span>
          </Typography>
          <MainStyle>
            <Typography component="div" variant="overline" sx={{ mb: 5 }}>
              Scan this code to Pay
            </Typography>
            <Box
              sx={{
                backgroundColor: () =>
                  theme.palette.mode === 'light' ? '#ffffff' : 'common.white',
                borderRadius: '10px',
                mb: 5,
              }}
            >
              <Image width={400} height={300} src="/assets/qrcode/phonepay.png" alt="phonepay" />
            </Box>
          </MainStyle>
        </Box>
      </Container>
    </>
  );
}
