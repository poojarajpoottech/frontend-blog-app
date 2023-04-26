// next
import Head from 'next/head';
// @mui
import { Box } from '@mui/material';
// layouts
import MainLayout from '../layouts/main';
// components
import ScrollProgress from '../components/scroll-progress';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeLookingFor,
  HomeAdvertisement,
  AppFeatured,
} from '../sections/home';

const _appFeatured = [
  {
    id: 1,
    image: '/assets/images/banner/banner_2.jpg',
    title: 'Latest Update',
    description: 'UX',
  },
  {
    id: 2,
    image: '/assets/images/banner/banner_3.jpg',
    title: 'Latest Update',
    description: 'demo',
  },
  {
    id: 3,
    image: '/assets/images/banner/banner_4.jpg',
    title: 'Latest Update',
    description: 'demo',
  },
  {
    id: 4,
    image: '/assets/images/banner/banner_5.jpg',
    title: 'Latest Update',
    description: 'Update',
  },
];

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
        <AppFeatured list={_appFeatured} />
        <HomeLookingFor />
        <HomeAdvertisement />
      </Box>
    </>
  );
}
