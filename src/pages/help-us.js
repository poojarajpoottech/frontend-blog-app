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
        <title> Help | UnboxHub</title>
      </Head>
      <HelpHero />
      <Container component={MotionViewport} sx={{ mt: 5, mb: 5 }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h5" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Dear friends and family,
          </Typography>
        </m.div>
        <Box sx={{ mb: 5, mt: 5 }}>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            I hope this message finds you well. I wanted to take a moment to express my gratitude
            for your continued support and enthusiasm for the unboxing and product-related content I
            provide on our website. Your engagement and feedback have been invaluable in shaping the
            direction of our platform.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            As you may know, creating high-quality content requires dedication, time, and resources.
            In order to ensure that we continue to deliver the best possible experience, I am
            reaching out to you today with a small request for financial assistance. I am looking to
            raise funds,
            <span style={{ color: theme.palette.mode === 'light' ? 'purple' : 'red' }}>
              approximately 50 rupees,
            </span>
            to cover the costs of essential video editing software and other equipment necessary to
            produce informative tutorials.
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            For those who are able and willing to contribute, you can do so by [insert preferred
            method of contribution, such as providing a link to a donation page or specifying
            payment options]. Your generosity will go a long way in supporting our mission of
            delivering high-quality tutorials and improving the overall experience for our
            community.
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
