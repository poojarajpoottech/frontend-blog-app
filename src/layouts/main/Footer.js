// next
import NextLink from 'next/link';
import { alpha } from '@mui/material/styles';
import { Box, Grid, Link, Stack, Container, Typography, IconButton, Divider } from '@mui/material';
import { PATH_PAGE } from '../../routes/paths';
import { _socials } from '../../_mock/arrays';
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';

const LINKS = [
  {
    headline: 'TechHubAI',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'TechHubAI@gmail.com', href: '#' },
      { name: '91+ 7869351845', href: '#' },
      {
        name: 'Roopena Agrahara, Bengaluru, Karnataka 560068',
        href: '#',
      },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>

          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Thank you for visiting my portfolio! I'm excited to connect with potential employers,
              clients, and fellow developers. If you're interested in working together or have any
              inquiries, feel free to reach out. Let's bring your ideas to life and create
              exceptional web experiences.
            </Typography>

            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 5,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social, index) => (
                <NextLink key={index} target="_blank" href={social.path}>
                  <IconButton
                    sx={{
                      color: social.color,
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                    key={social.name}
                  >
                    <Iconify icon={social.icon} />
                  </IconButton>
                </NextLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={NextLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Copyright © 2023 TechHubAI. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );

  return simpleFooter;
}
