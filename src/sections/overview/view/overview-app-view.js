'use client';

import Link from 'next/link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { SeoIllustration } from '../../../assets/illustrations';
import AppWelcome from '../app-welcome';

export default function OverviewAppView() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={12}>
        <AppWelcome
          title={`Welcome back 👋 \n ${'Satyendra Singh'}`}
          description="As a frontend developer, I am thrilled to share with you my collection of technical certificates that showcase my expertise in creating stunning web experiences. These certificates are a testament to my dedication and continuous learning in the ever-evolving field of frontend development."
          img={<SeoIllustration />}
          action={
            <Link href="/">
              <Button variant="contained" color="primary">
                Go Back
              </Button>
            </Link>
          }
        />
      </Grid>
    </Grid>
  );
}
