import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress, Stack } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fPercent } from '../../utils/formatNumber';

// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------
export const SKILLS = [...Array(5)].map((_, index) => ({
  label: ['User Interface', 'JavaScript', 'React JS', 'TypeScript', 'Next JS'][index],
  value: [90, 80, 90, 60, 70][index],
}));

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="/assets/images/about/what_1.jpg"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 2"
                      src="/assets/images/about/what_2.jpg"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                What is TechHubAI?
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                }}
              >
                TECHPORTFOLIO is a platform dedicated to showcasing my skills, expertise, and
                passion as a frontend developer. Here, you'll find a curated collection of my
                projects that demonstrate my abilities and highlight my commitment to creating
                exceptional web experiences. Feel free to personalize and modify the description to
                accurately represent your portfolio and convey your unique qualities as a frontend
                developer.
              </Typography>
            </m.div>
            <Stack spacing={3} sx={{ my: 5 }}>
              {SKILLS.map((progress, index) => (
                <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                  <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                      {progress.label}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {fPercent(progress.value)}
                    </Typography>
                  </Stack>

                  <LinearProgress
                    color={
                      (index === 0 && 'primary') ||
                      (index === 1 && 'warning') ||
                      (index === 2 && 'secondary') ||
                      (index === 3 && 'info') ||
                      'error'
                    }
                    variant="determinate"
                    value={progress.value}
                  />
                </Box>
              ))}
            </Stack>

            <m.div variants={varFade().inRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
              >
                Our Work
              </Button>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
