import { m } from 'framer-motion';
import React from 'react';
import Head from 'next/head';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

import Image from 'next/image';
import MainLayout from '../layouts/main';

import { HelpHero } from '../sections/help';
import { MotionViewport, varFade } from '../components/animate';

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
      <Container component={MotionViewport} sx={{ mt: 5, mb: 5 }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h5" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Dear friends and family,
          </Typography>
        </m.div>
        <Box sx={{ mb: 5, mt: 5 }}>
          <Typography variant="subtitle2">
            With a heavy heart, I must ask for your help once again. You have always been there for
            me, and now I need your unwavering support and love more than ever before. Regrettably,
            I must ask for a small amount of money as I embark on a new journey after leaving my
            job. Without your generosity and encouragement, I fear that my dreams may not come to
            fruition. Please know that I am eternally grateful for your kindness and love.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2, mt: 2 }}>
            <span style={{ color: theme.palette.mode === 'light' ? 'purple' : 'red' }}>
              So I am collecting only 50Rs for this project Source Code
            </span>
            . I hope you all understand my feeling and my situation.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Here is my PAYTM, GOOGLE PAY, PHONE PAY Number 7869351845. You have to pay 50Rs on this
            Number. Thanks in advance.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Uper diya gaya number 7869351845 me PAYTM, GOOGLE PAY, PHONE PAY tino me koi ek online
            payment aap kar sakte ho. Only 50RS pay krna hai. Ek bar hone ke baad screenshot muje
            <span style={{ color: theme.palette.mode === 'light' ? 'purple' : 'red' }}>
              WhatsApp me HERE
            </span>{' '}
            same number par kr dijiyega. Me apko source code share kr doonga. Dhanyawad.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            **Those who Pay
            <span style={{ color: theme.palette.mode === 'light' ? 'purple' : 'red' }}>
              WhatsApp me HERE
            </span>
            with a screenshot of payment. And, only those will get the source code**
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
            }}
          >
            Thank You, you gave your time and read all these. Have a great day.
          </Typography>
          <MainStyle>
            <Typography component="div" variant="overline" sx={{ mb: 5, mt: 2 }}>
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
        <m.div variants={varFade().inUp}>
          <Typography variant="subtitle2" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            I am trying to raise funds to help me get back on my feet. Every little bit counts and
            would mean the world to me. I am grateful for any support you can offer, whether it's
            through a donation, a kind word, or sharing this post with your network.
          </Typography>
        </m.div>
      </Container>
    </>
  );
}
