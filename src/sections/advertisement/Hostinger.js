import { m } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';

import { varFade } from '../../components/animate';
import Logo from './Logo';

export default function Hostinger() {
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
        <Logo />

        <m.div variants={varFade().inDown}>
          <Typography sx={{ mt: 2, mb: 2 }}>
            At Hostinger, we believe that hosting must be for everyone. thats why we provide the
            best services at most affordable price.Get started now with the given link to get upto
            <span style={{ fontWeight: '700' }}> 83% </span> discount.
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }}>
            Do not forget to use <span style={{ fontWeight: '700' }}> 1SATYENDRAS51 </span> promo
            code to get extra <span style={{ fontWeight: '700' }}> 20% </span> discount on existing
            discount.
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Button
            size="large"
            variant="contained"
            href="https://hostinger.in?REFERRALCODE=1SATYENDRAS51"
            sx={{
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.300'),
            }}
          >
            Checkout now
          </Button>
        </m.div>
      </Box>
    </m.div>
  );
}
