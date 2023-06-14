import { m } from 'framer-motion';
// @mui
import { Container, Typography } from '@mui/material';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container component={MotionViewport} sx={{ mt: 5 }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          My vision?
        </Typography>
      </m.div>
      <m.div variants={varFade().inUp}>
        <Typography
          sx={{ textAlign: 'center', maxWidth: 800, color: 'text.secondary', mx: 'auto' }}
        >
          At the core of our vision is the belief that knowledge empowers consumers. We aim to
          provide transparent and unbiased information about the products we unbox, ensuring that
          our audience has all the necessary details to make informed choices. Our reviews go beyond
          the surface-level features and delve deep into the quality, performance, and overall value
          of each product.
        </Typography>
      </m.div>
    </Container>
  );
}
