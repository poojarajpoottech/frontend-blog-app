import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Paper, Rating, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur, bgGradient } from '../../utils/cssStyles';
import { fDate } from '../../utils/formatTime';
// components
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Enthusiastic Learners',
    rating: 5,
    dateCreate: new Date(),
    content: `Empowering knowledge seekers with AI and frontend skills exploration.`,
  },
  {
    name: 'AI Enthusiasts',
    rating: 5,
    dateCreate: new Date(),
    content: `Inspiring AI enthusiasts with insightful content and latest advancements.`,
  },
  {
    name: 'Frontend Developers',
    rating: 5,
    dateCreate: new Date(),
    content: `Empowering frontend developers with valuable resources and career support.`,
  },
  {
    name: 'Tech Enthusiasts',
    rating: 4,
    dateCreate: new Date(),
    content: `Engaging technology enthusiasts with AI and frontend insights.`,
  },
  {
    name: 'Career Switchers',
    rating: 4,
    dateCreate: new Date(),
    content: `Guiding career switchers in AI and frontend transition journey.`,
  },
  {
    name: 'Students and Educators',
    rating: 2,
    dateCreate: new Date(),
    content: `Supporting students and educators with practical learning resources.`,
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/images/about/testimonials.jpg',
  }),
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: 0,
    height: 840,
    textAlign: 'left',
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.secondary' }}
                >
                  Testimonials
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  Who love <br />
                  my work
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white' }}>
                  Our work at TechHubAI is appreciated and loved by a diverse community of
                  individuals who are passionate about life learning, AI, and frontend skills. Here
                  are some groups of people who find value and enjoyment in what we offer:
                </Typography>
              </m.div>

              {!isDesktop && (
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                  <m.div variants={varFade().inUp}>
                    <TestimonialLink />
                  </m.div>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: 'absolute' },
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {isDesktop && (
          <Box sx={{ bottom: 60, position: 'absolute' }}>
            <m.div variants={varFade().inLeft}>
              <TestimonialLink />
            </m.div>
          </Box>
        )}
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    content: PropTypes.string,
    dateCreate: PropTypes.instanceOf(Date),
  }),
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>

      <Typography gutterBottom component="div" variant="caption" sx={{ color: 'grey.500' }}>
        {fDate(dateCreate)}
      </Typography>

      <Rating value={rating} readOnly size="small" />

      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

// ----------------------------------------------------------------------

function TestimonialLink() {
  return (
    <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
      Read more testimonials
      <Iconify icon="ic:round-arrow-right-alt" sx={{ ml: 1 }} />
    </Link>
  );
}
