import { m } from 'framer-motion';
import { styled } from '@mui/system';
import { Box, Container, Typography } from '@mui/material';
import { varFade } from '../../components/animate';

const StyledRoot = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/assets/background/banner2.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 50,
    padding: 0,
  },
  minHeight: '50vh',
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export default function ExperienceHome() {
  return (
    <StyledRoot>
      <ContentContainer>
        <Typography sx={{ color: 'common.white' }} variant="h3" gutterBottom>
          Welcome to My Professional Showcase!
        </Typography>
        <m.div variants={varFade().inRight}>
          <Typography
            variant="h6"
            sx={{
              mt: 5,
              color: 'common.white',
              fontWeight: 'fontWeightMedium',
            }}
          >
            I have successfully collaborated with cross-functional teams to design and develop
            responsive and intuitive web applications. My strong attention to detail and
            problem-solving skills have allowed me to tackle complex challenges and deliver elegant
            solutions
          </Typography>
        </m.div>
      </ContentContainer>
    </StyledRoot>
  );
}
