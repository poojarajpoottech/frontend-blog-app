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
              &quot;My name is Satyendra Singh, and I am 24 years old. I was born in Banda, Uttar
              Pradesh, and I currently live in Bengaluru, India with my wife. My family still lives
              in our native place. I am a Senior Full Stack FrontEnd Developer with over 3 years of
              extensive experience in developing web, desktop applications, and utilities for both
              huge enterprises and startups. I have experience in domains like e-commerce, HR
              portals, busyari, and insurance. While working on these projects, I have learned how
              to identify and efficiently solve business needs, create high-performing, scalable,
              and maintainable solutions of any difficulty, and collaborate with my team members to
              achieve our common goals together.&quot;
            </Typography>
          </m.div>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
