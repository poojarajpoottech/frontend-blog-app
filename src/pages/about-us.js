import { Divider } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// sections
import {
  AboutHero,
  AboutWhat,
  AboutTeam,
  AboutVision,
  AboutTestimonials,
  AboutMe,
} from '../sections/about';
import HeadTitle from '../components/HeadTitle';

// ----------------------------------------------------------------------

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <HeadTitle title="About US" />
      <AboutHero />
      <AboutMe />
      <AboutWhat />
      <AboutVision />
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      <AboutTeam />
      <AboutTestimonials />
    </>
  );
}
