import { Container, Box } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// _mock
import { _mapContact } from '../_mock/arrays';
// sections
import { ContactHero, ContactForm, ContactMap } from '../sections/contact';
import HeadTitle from '../components/HeadTitle';

// ----------------------------------------------------------------------

ContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ContactPage() {
  return (
    <>
      <HeadTitle title="Contact US" />

      <ContactHero />

      <Container sx={{ py: 10 }}>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm />

          <ContactMap contacts={_mapContact} />
        </Box>
      </Container>
    </>
  );
}
