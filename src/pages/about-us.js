// next
import Head from 'next/head';
// @mui
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

// ----------------------------------------------------------------------

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Head>
        <title> About us | Designwithsatya</title>
      </Head>

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
