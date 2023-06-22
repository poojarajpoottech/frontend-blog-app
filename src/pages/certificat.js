import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Divider } from '@mui/material';

import MainLayout from '../layouts/main';
// sections
import HeadTitle from '../components/HeadTitle';
import { CertificatePage } from '../sections/certificates';
import { OverviewAppView } from '../sections/overview/view';
import { MotionViewport } from '../components/animate';

// ----------------------------------------------------------------------

CertiFicate.getLayout = (page) => <MainLayout>{page}</MainLayout>;

const StyledHr = styled(Divider)(({ theme }) => ({
  width: '25rem',
  height: '5px',
  backgroundImage: 'linear-gradient(135deg, #21dbaa, #00b4ef, #0768dd, #5f1ae5)',
  marginLeft: 'auto !important',
  marginRight: 'auto !important',
}));
const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
})); // ----------------------------------------------------------------------

export default function CertiFicate() {
  return (
    <>
      <HeadTitle title="certificate" />

      <OverviewAppView />
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
            <StyledHr />
          </Stack>
          <CertificatePage />
        </Container>
      </StyledRoot>
    </>
  );
}
