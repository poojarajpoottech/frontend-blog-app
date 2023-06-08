import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Grid, Button, Container, Typography, Card } from '@mui/material';

import { Hostinger } from '../sections/advertisement';
import SvgColor from '../components/svg-color';
import Iconify from '../components/iconify';
import { varFade, MotionViewport } from '../components/animate';
import useCountdown from '../hooks/useCountdown';
import CheckoutPage from './CheckoutPage';

// ----------------------------------------------------------------------

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const icons = [
  '/assets/icons/platforms/ic_sketch.svg',
  '/assets/icons/platforms/ic_figma.svg',
  '/assets/icons/platforms/ic_js.svg',
  '/assets/icons/platforms/ic_ts.svg',
];
const commons = ['Next complete code', 'Css code', 'theme complete setup', 'Node js complte code'];

// ----------------------------------------------------------------------

export default function HomePricingPlans() {
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log('Order placed! You will receive an email confirmation.');
      }

      if (canceled) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }
  }, [success, canceled]);

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Description />
        <PlanCard />
        <Hostinger />
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <Stack spacing={3} sx={{ mb: 10, textAlign: 'center' }}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.primary' }}>
          "Hello friends" 👋
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography variant="h2">What you will get ?</Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography sx={{ color: 'text.secondary' }}>
          Choose the perfect project for your needs. Always flexible to grow
        </Typography>
      </m.div>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Cdiscription() {
  return (
    <m.div variants={varFade().in}>
      <Box
        sx={{
          textAlign: 'center',
          mt: {
            xs: 5,
            md: 10,
          },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h4">Still have questions?</Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ mt: 2, mb: 5, color: 'text.secondary' }}>
            Please describe your case to receive the most accurate advice.
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            href="/contact-us"
            sx={{
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
              '&:hover': {
                bgcolor: 'text.primary',
              },
            }}
          >
            Contact us
          </Button>
        </m.div>
      </Box>
    </m.div>
  );
}

// ----------------------------------------------------------------------

function PlanCard() {
  return (
    <Box sx={{ borderRadius: 2, border: (theme) => `dashed 1px ${theme.palette.divider}` }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Stack
                sx={{
                  p: 5,
                  pt: 10,
                }}
              >
                <Stack spacing={2} sx={{ mt: 2, mb: 2 }}>
                  <Typography variant="overline" component="div">
                    Price - ₹ 99
                  </Typography>
                  <Box sx={{ position: 'relative' }}>
                    <Typography variant="h4">Portfolio Project</Typography>
                  </Box>
                </Stack>

                <Stack sx={{ mb: 1 }} direction="row" spacing={2}>
                  {icons.map((icon) => (
                    <SvgColor key={icon} src={icon} sx={{ width: 24, height: 24 }} />
                  ))}
                </Stack>

                <Stack spacing={1}>
                  {commons.map((option) => (
                    <Stack key={option} spacing={1} direction="row" alignItems="center">
                      <Iconify icon="eva:checkmark-fill" width={16} />
                      <Typography variant="body2">{option}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack sx={{ mt: 5 }} alignItems="flex-start">
                  <CheckoutPage />
                </Stack>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Cdiscription />
          <TimeShow />
        </Grid>
      </Grid>
    </Box>
  );
}

function TimeShow() {
  const { hours, minutes, seconds } = useCountdown(new Date('09/04/2023 23:30'));
  return (
    <Stack
      direction="row"
      justifyContent="center"
      divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
      sx={{ typography: 'h2', mt: 2 }}
    >
      <TimeBlock label="Hours" value={hours} />

      <TimeBlock label="Minutes" value={minutes} />

      <TimeBlock label="Seconds" value={seconds} />
    </Stack>
  );
}

TimeBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

function TimeBlock({ label, value }) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
