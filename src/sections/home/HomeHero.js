import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Typewriter from 'typewriter-effect';

// theme
import useResponsive from '../../hooks/useResponsive';
import { textGradient, bgGradient, bgBlur } from '../../theme/css';
import { secondaryFont } from '../../theme/typography';
// layouts
import { HEADER } from '../../layouts/config-layout';
import SvgColor from '../../components/svg-color';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.2 : 0.94),
    imgUrl: '/assets/background/portfolio_banner.webp',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));
// const StyledDescription = styled('div')(({ theme }) => ({
//   margin: 'auto',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   padding: theme.spacing(15, 0),
//   [theme.breakpoints.up('md')]: {
//     padding: theme.spacing(10, 0),
//   },
// }));

// const StyledTextGradient = styled(m.h1)(({ theme }) => ({
//   ...textGradient(
//     `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
//   ),
//   padding: 0,
//   marginTop: 10,
//   marginBottom: 24,
//   letterSpacing: 8,
//   lineHeight: 1,
//   textAlign: 'center',
//   backgroundSize: '400%',
//   fontSize: `${64 / 16}rem`,
//   fontFamily: secondaryFont.style.fontFamily,
//   [theme.breakpoints.up('md')]: {
//     fontSize: `${96 / 25}rem`,
//   },
// }));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  marginBottom: 24,
  letterSpacing: 8,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: `${64 / 30}rem`,
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 25}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');
  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [heroRef, scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);
  const opacity = 1 - percent / 100;
  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        opacity: opacity > 0 ? opacity : 0,

        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
          lg: 0.1,
        },
      }}
    >
      <m.div variants={varFade().in}>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          WELCOME TO TECHPORTFOLIO
        </StyledTextGradient>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="h6" sx={{ textAlign: 'center', maxWidth: '800px' }}>
          &quot;Passionate frontend developer crafting beautiful, engaging web experiences.
          Showcasing innovative, responsive projects that demonstrate expertise in user-centered
          design.&quot;
        </Typography>
      </m.div>
      <m.div variants={varFade().in}>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          ABOUT ME
        </StyledTextGradient>
      </m.div>
      <Stack spacing={1.5} direction={{ xs: 'row', sm: 'row' }} sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ color: '#00AB55' }}>
          This Website is For
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.500' }}>
          <Typewriter
            options={{
              strings: ['App Development', 'Web Developer', 'Latest Updates', 'YouTuber'],
              autoStart: true,
              loop: true,
              delay: 90,
            }}
          />
        </Typography>
      </Stack>
      <Stack spacing={3} sx={{ textAlign: 'center', opacity: 0.48 }}>
        <m.div variants={varFade().in}>
          <Typography variant="overline">Available For</Typography>
        </m.div>

        <Stack spacing={2} direction="row" justifyContent="center">
          {['figma', 'js', 'ts', 'nextjs'].map((platform) => (
            <m.div key={platform} variants={varFade().in}>
              <SvgColor src={`/assets/icons/platforms/ic_${platform}.svg`} />
            </m.div>
          ))}
        </Stack>
      </Stack>
      {/* </StyledDescription> */}
    </Stack>
  );

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1 }}>
            <Grid container sx={{ height: 1 }}>
              <Grid xs={12} md={12} sx={{ height: -1 }}>
                {renderDescription}
              </Grid>
            </Grid>
          </Container>
          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {renderPolygons}

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
