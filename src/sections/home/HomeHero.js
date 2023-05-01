import { m, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Typewriter from 'typewriter-effect';

import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography, Stack, Grid, IconButton } from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { textGradient } from '../../utils/cssStyles';

// theme
import { secondaryFont } from '../../theme/typography';

import { _socials } from '../../_mock/arrays';

// components
import Iconify from '../../components/iconify';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  background: `url('/assets/background/portfolio_banner.webp')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // position: 'relative',
  // ...bgGradient({
  //   color: alpha(theme.palette.grey[900], theme.palette.mode === 'light' ? 0.94 : 0.9),
  //   imgUrl: '/assets/background/overlay_2.jpg',
  // }),
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    position: 'fixed',
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(20, 0),
  height: '100%',
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  backgroundSize: '400%',
  fontFamily: secondaryFont.style.fontFamily,
  fontSize: `${74 / 45}rem`,
  textAlign: 'center',
  lineHeight: 1,
  padding: 0,
  marginTop: 10,
  marginBottom: 24,
  letterSpacing: 8,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 32}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 480,
  height: 480,
  top: -80,
  right: -80,
  borderRadius: '50%',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.08),
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const isDesktop = useResponsive('up', 'md');

  const { scrollYProgress } = useScroll();

  const [hide, setHide] = useState(false);

  useEffect(
    () =>
      scrollYProgress.on('change', (scrollHeight) => {
        if (scrollHeight > 0.8) {
          setHide(true);
        } else {
          setHide(false);
        }
      }),
    [scrollYProgress]
  );

  return (
    <>
      <StyledRoot sx={{ ...(hide && { opacity: 0 }) }}>
        <Container component={MotionContainer} sx={{ height: 1 }}>
          <Grid container spacing={10} sx={{ height: 1 }}>
            <Grid item xs={12} md={12} sx={{ height: -1 }}>
              <Description />
            </Grid>
          </Grid>
        </Container>

        {isDesktop && <StyledEllipseTop />}

        <StyledEllipseBottom />
      </StyledRoot>

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <StyledDescription>
      <m.div variants={varFade().in}>
        <StyledGradientText
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          WELCOME TO DESIGNWITHSATYA
        </StyledGradientText>
      </m.div>
      <m.div variants={varFade().in}>
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'grey.500', maxWidth: '800px' }}>
          &quot;Stay ahead of the curve by learning in-demand digital skills for future job
          opportunities with the fastest and most effective YouTube video.&quot;
        </Typography>
      </m.div>
      <m.div variants={varFade().in}>
        <StyledGradientText
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          ABOUT ME
        </StyledGradientText>
      </m.div>
      <Stack spacing={1.5} direction={{ xs: 'row', sm: 'row' }} sx={{ mb: 5 }}>
        <Typography variant="h6" sx={{ color: '#00AB55' }}>
          This Website is For
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.300' }}>
          <Typewriter
            options={{
              strings: ['Web Developer', 'App Developer', 'YouTuber', 'Designwithsatya'],
              autoStart: true,
              loop: true,
              delay: 90,
            }}
          />
        </Typography>
      </Stack>
      <Stack spacing={1} alignItems="center" justifyContent="center" direction="row">
        {_socials.map((social) => (
          <IconButton
            key={social.name}
            sx={{
              color: social.color,
              '&:hover': {
                bgcolor: alpha(social.color, 0.08),
              },
            }}
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack>
    </StyledDescription>
  );
}
