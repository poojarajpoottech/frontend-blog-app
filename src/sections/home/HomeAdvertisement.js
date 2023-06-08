import { m } from 'framer-motion';
// @mui
import { Button, Box, Container, Stack, Typography } from '@mui/material';

// components
import Iconify from '../../components/iconify';
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  return (
    <Container sx={{ mb: 5 }} component={MotionViewport}>
      <Stack
        alignItems="center"
        justifyContent="space-around"
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          backgroundImage: `linear-gradient(135deg, #21dbaa, #00b4ef, #0768dd, #5f1ae5)`,
          borderRadius: 2,
          pb: { xs: 5, md: 0 },
        }}
      >
        <Content />
        <Description />
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 2, typography: 'h2' }}
      >
        Advertise With Us
      </Box>
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 2, typography: 'body5' }}
      >
        Thank you for your interest in advertising with us!
      </Box>
      <Typography variant="body2" sx={{ color: 'common.white', mb: 2 }}>
        For more information, please contact us at:
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
      >
        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            rel="noopener"
            href="/contact-us"
            sx={{
              color: 'grey.800',
              bgcolor: 'common.white',
            }}
          >
            Contact Us
          </Button>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            rel="noopener"
            href="/contact-us"
            endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />}
            sx={{ color: 'common.white', '&:hover': { borderColor: 'currentColor' } }}
          >
            View The Profile
          </Button>
        </m.div>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <Stack component={m.div} variants={varFade().inUp} alignItems="center">
      <m.div
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="rocket"
          src="/assets/images/home/advertising.png"
          sx={{ maxWidth: 460 }}
        />
      </m.div>
    </Stack>
  );
}
