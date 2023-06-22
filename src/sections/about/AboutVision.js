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
          Our vision is to create a platform where individuals from diverse backgrounds can come
          together to explore and expand their understanding of life learning, AI, and frontend
          skills. We strive to build a community that values collaboration, curiosity, and the
          pursuit of excellence.
        </Typography>
      </m.div>
    </Container>
  );
}
