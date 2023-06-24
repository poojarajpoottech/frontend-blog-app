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
          At the heart of my work is a clear vision—to create meaningful and impactful web
          experiences that leave a lasting impression. I believe in the power of design and
          technology to shape our digital world and enrich the lives of users.
        </Typography>
      </m.div>
    </Container>
  );
}
