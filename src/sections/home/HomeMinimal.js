import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Make Brand',
    description:
      'We make websites for the online market backed with research-driven, data-rich information.',
  },
  {
    icon: ' /assets/icons/home/ic_react.svg',
    title: 'React js',
    description:
      'I will create your project with react js and with code quality. It helps you to create projects fastest and easily customized packages for your projects.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Development',
    description:
      'Appnovation offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs',
  },
  {
    icon: ' /assets/icons/home/ic_figma.svg',
    title: 'UI/UX Designer',
    description:
      'We provide services like UX Audit, UX Research, UI UX Design, User Testing, UX Innovation',
  },
  {
    icon: ' /assets/icons/home/ic_nodejs.svg',
    title: 'Node Js ',
    description:
      'Our product engineering services include architecture, design, development, testing, security, deployment.',
  },
  {
    icon: ' /assets/icons/home/ic_mobileapplication.svg',
    title: 'Mobile Application',
    description:
      'Services in the mobile app development industry provide end-to-end organization, conceptualization, design.',
  },
  {
    icon: ' /assets/icons/home/ic_nextjs.svg',
    title: 'Next JS',
    description:
      'Services in the Next JS website development industry provide end-to-end organization, conceptualization, design.',
  },
  {
    icon: ' /assets/icons/home/ic_redux.svg',
    title: 'Redux ToolKit',
    description: 'Make services a natural part of redux architecture',
  },
  {
    icon: ' /assets/icons/home/ic_seo.svg',
    title: 'SEO',
    description:
      'Get in touch with us for guranteed quality leads and traffic on your website. Get Dedicated SEO Manager, Content Optimisation, Link Building, Analytics Tracking & More!',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(10, 5),

  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              PortFolio
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">How Can I helps you?</Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="subtitle1">
              We are a full stack design and development studio crafting end-to-end digital
              solutions including research, ui ux design, front-end, back-end & mobile app
              development services.
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  sx={{ mx: 'auto', width: 48, height: 48 }}
                />

                <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                  {card.title}
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
