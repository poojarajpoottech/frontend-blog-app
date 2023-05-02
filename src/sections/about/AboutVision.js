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
          "At DesignWithSatya, our vision is to empower and inspire web developers around the world
          by providing the highest-quality tutorials and cutting-edge technology. We're committed to
          helping you stay ahead of the curve and achieve your goals, whether you're a seasoned pro
          or just starting out in the world of web development. With our expert guidance and
          support, you can unleash your creativity and take your skills to the next level. Join us
          on this exciting journey, and let's build a brighter future for web development together!"
        </Typography>
      </m.div>
    </Container>
  );
}
