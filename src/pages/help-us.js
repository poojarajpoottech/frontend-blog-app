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
            However, in order to continue creating high-quality content, I am in need of some
            financial assistance. I am hoping to raise a small amount of money, around 50 rupees, to
            cover the costs of video editing software and other equipment necessary to produce these
            tutorials.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            If you are able and willing to contribute, any amount would be greatly appreciated. Not
            only would your support help me continue creating these tutorials, but it would also
            benefit others who are looking to improve their skills in web development.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            To continue producing high-quality content, I need some financial assistance to cover
            the costs of video editing software and other equipment necessary for producing these
            tutorials. That's why I'm asking for your support. Even a small contribution of
            <span style={{ color: theme.palette.mode === 'light' ? 'purple' : 'red' }}>
              50 rupees would go a long way in helping me
            </span>
            50 rupees would go a long way in helping me continue creating these tutorials.{' '}
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
            "Thank you, for considering my request. Please let me know if you have any questions or
            concerns.
          </Typography>
        </m.div>
      </Container>
    </>
  );
}
