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
  backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/about/help.jpg)',
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

export default function HelpHero() {
  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>
          <TextAnimate
            text="Hello,"
            sx={{
              color: 'primary.main',
            }}
            variants={varFade().inRight}
          />
          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
            <TextAnimate text="How To Get" />
            <TextAnimate text="Code?" />
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
              Satyendra Singh,I want to tell everyone I live in a very small village. And my father
              is a farmer. You all know how much we can earn by doing farming.Earlier I used to do
              job in IT field.But I have left that job.Because I had some family responsibilities.
              Which I was not able to fulfill from that job.So I decided to share my knowledge on
              YouTube. For 2 Months I have been sharing knowledge on coding and uploading many
              videos on YouTube.So I believed in Just keep doing the good things in life by helping
              others and dont expect anything in return because God is watching and Karma will give
              us everything for sure”.
            </Typography>
          </m.div>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
