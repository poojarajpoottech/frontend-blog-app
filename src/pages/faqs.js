import { Box, Container, Typography } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import { FaqsHero, FaqsList, FaqsForm } from '../sections/faqs';
import HeadTitle from '../components/HeadTitle';

// ----------------------------------------------------------------------

FaqsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function FaqsPage() {
  return (
    <>
      <HeadTitle title="Faqs" />

      <FaqsHero />

      <Container sx={{ pt: 15, pb: 10, position: 'relative' }}>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions?
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <FaqsList />

          <FaqsForm />
        </Box>
      </Container>
    </>
  );
}
