import { styled } from '@mui/material/styles';
import { Container, Typography, Stack } from '@mui/material';

import MainLayout from '../layouts/main';
// sections
import HeadTitle from '../components/HeadTitle';
import { CertificatePage } from '../sections/certificates';
import { MotionViewport } from '../components/animate';

// const _appFeatured = [
//   {
//     id: 1,
//     coverUrl:
//       'https://e0.pxfuel.com/wallpapers/102/373/desktop-wallpaper-purple-shards-black-and-purple-shards-thumbnail.jpg',
//     title: '25-08-2018',
//     description: ' NareshIT Software Training Institute of Hyderabad',
//   },
//   {
//     id: 2,
//     coverUrl:
//       'https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg',
//     title: '25-08-2018',
//     description: ' NareshIT Software Training Institute of Hyderabad',
//   },
// ];

// ----------------------------------------------------------------------

CertiFicate.getLayout = (page) => <MainLayout>{page}</MainLayout>;

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

export default function CertiFicate() {
  return (
    <>
      <HeadTitle title="certificate" />
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
              Most Popular Certified Training Programs I've Completed
            </Typography>
          </Stack>
          <CertificatePage />
        </Container>
      </StyledRoot>
    </>
  );
}
