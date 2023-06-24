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
    icon: ' /assets/icons/home/ic_productunboxing.svg',
    title: 'Product Unboxing Videos',
    description:
      'Create engaging and informative videos where you unbox different products, showcasing their packaging, contents, and initial impressions.',
  },
  {
    icon: ' /assets/icons/home/ic_detailedproductreviews.svg',
    title: 'Detailed Product Reviews',
    description:
      'Provide comprehensive reviews of the unboxed products, highlighting their features, performance, pros, and cons to help potential customers make informed decisions.',
  },
  {
    icon: ' /assets/icons/home/ic_productcomparisons.svg',
    title: 'Product Comparisons',
    description:
      'Conduct side-by-side comparisons of similar products, outlining their differences and helping visitors determine which one suits their needs best.',
  },

  {
    icon: ' /assets/icons/home/ic_expertrecommendations.svg',
    title: 'Expert Recommendations',
    description:
      'Offer expert recommendations and curated lists of top products in various categories, based on your extensive knowledge and experience.',
  },

  {
    icon: ' /assets/icons/home/ic_sponsoredontent.svg',
    title: 'Sponsored Content',
    description:
      'Collaborate with brands to feature sponsored content, where you unbox and review their products, providing exposure and advertising opportunities.',
  },
  {
    icon: ' /assets/icons/home/ic_affiliatemarketing.svg',
    title: 'Affiliate Marketing',
    description:
      'Utilize affiliate marketing by including affiliate links to products you unbox, earning a commission when visitors make purchases through those links.',
  },
  {
    icon: ' /assets/icons/home/ic_exclusivediscounts.svg',
    title: 'Exclusive Deals and Discounts',
    description:
      'Provide exclusive deals, discount codes, or partnerships with brands to offer special offers and savings to your audience.',
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
              PortFolio TechhubAI
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">How Can I helps you?</Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="subtitle1">
              As a frontend developer, I am here to offer my expertise and support. Whether you're
              seeking a collaborator for your next project, need assistance with web development
              challenges, or looking for a passionate professional to join your team, I am ready to
              make a difference. Let's connect and explore how we can create amazing web experiences
              together
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
