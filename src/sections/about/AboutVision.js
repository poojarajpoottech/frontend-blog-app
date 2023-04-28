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
          &quot;My vision includes providing the best tutorials and technology&quot;
        </Typography>
      </m.div>
    </Container>
  );
}
