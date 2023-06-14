import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    bottom: 80,
    textAlign: 'left',
    position: 'absolute',
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>
          <TextAnimate
            text="Who"
            sx={{
              color: 'primary.main',
            }}
            variants={varFade().inRight}
          />

          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
            <TextAnimate text="I" />
            <TextAnimate text="Am?" />
          </Stack>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h6"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Welcome to my website, where the world of unboxing and product exploration comes
              alive! I am thrilled to introduce myself and share my unwavering passion for unboxing
              a diverse range of products, providing you with valuable insights along the way. As a
              dedicated enthusiast and content creator, I am deeply committed to discovering new
              products and sharing my experiences with you. Through my website, I strive to be your
              trusted source of information and recommendations, guiding you in the exciting realm
              of unboxing and exploring a wide variety of products. Your satisfaction is my top
              priority, and I am here to serve you. I encourage you to engage with my content, share
              your feedback, and express your thoughts. Your input is invaluable as it enables me to
              continually refine and customize my content to meet your specific needs and interests.
              Let's embark on this exhilarating journey of unboxing and discovery together, where we
              will uncover remarkable products, unravel their unique features, and explore their
              limitless potential. Thank you for being a part of my website and placing your trust
              in me as your companion and guide in the vibrant world of unboxing.
            </Typography>
          </m.div>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
