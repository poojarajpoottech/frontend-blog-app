import Head from 'next/head';
import { Box } from '@mui/material';
import MainLayout from '../layouts/main';
// components
import ScrollProgress from '../components/scroll-progress';
// sections
import { HomeHero, HomeMinimal, HomeLookingFor, HomeAdvertisement } from '../sections/home';
import CameraView from './CameraView';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title> The Design With Satya</title>
      </Head>

      <ScrollProgress />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal />
        <HomeLookingFor />
        <HomeAdvertisement />
        <CameraView />
      </Box>
    </>
  );
}
