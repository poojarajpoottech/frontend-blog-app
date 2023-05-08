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
      'If youre looking for a trusted partner for your web development needs, look no further than Designwithsatya. Contact us today to learn more about how we can help you achieve your online goals.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Web Development',
    description:
      'Our team of expert web developers and designers at Designwithsatya offers a wide range of web development services to help businesses succeed online. From responsive design to web application development, we have the expertise to help you achieve your goals.',
  },
  {
    icon: ' /assets/icons/home/ic_figma.svg',
    title: 'UI/UX Designer',
    description:
      'Our team of experienced UI/UX designers at Designwithsatya offers customized design solutions that focus on user experience and engagement. From wireframing to prototyping and testing, we provide a full range of design services to help you achieve your goals.',
  },

  {
    icon: ' /assets/icons/home/ic_mobileapplication.svg',
    title: 'Mobile Application',
    description:
      'Our mobile application development services at Designwithsatya are designed to help businesses reach their customers on-the-go. We provide end-to-end development solutions, including design, development, testing, and deployment, to help you achieve your mobile goals.',
  },

  {
    icon: ' /assets/icons/home/ic_seo.svg',
    title: 'SEO',
    description:
      'At Designwithsatya, we provide SEO services to help businesses improve their online visibility and attract more traffic. Our team of experienced professionals uses the latest SEO techniques to ensure that your website ranks well in search engine results,to help you achieve your goals.',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(10, 5),
  minHeight: '200px',
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
              At Designwithsatya, we specialize in creating modern, user-friendly websites that help
              businesses and organizations achieve their online goals. Our web development solutions
              are tailored to the unique needs of each client, ensuring that their website meets
              their specific requirements and objectives.
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 3 }}
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

                <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                  {card.title}
                </Typography>

                <Typography variant="body2" align="justify" sx={{ color: 'text.secondary' }}>
                  {card.description}
                </Typography>
              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
