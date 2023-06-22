import { Container, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// layouts
import MainLayout from '../layouts/main';
// sections
import { ProjectsPage } from '../sections/project';
import HeadTitle from '../components/HeadTitle';
import { MotionViewport } from '../components/animate';

// ----------------------------------------------------------------------

Project.getLayout = (page) => <MainLayout>{page}</MainLayout>;

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
})); // ----------------------------------------------------------------------

export default function Project() {
  return (
    <>
      <HeadTitle title="experince" />
      <StyledRoot>
        <Container component={MotionViewport}>
          <Stack
            spacing={3}
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 5 },
            }}
          >
            <Typography component="div" variant="overline">
              Discover My Professional Journey
            </Typography>
          </Stack>
          <ProjectsPage />
        </Container>
      </StyledRoot>
    </>
  );
}
