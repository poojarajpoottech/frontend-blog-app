// import PropTypes from 'prop-types';
// import { m } from 'framer-motion';
// import { styled } from '@mui/system';
// import { Box, Container, Typography, Stack } from '@mui/material';
// import { varFade, MotionContainer } from '../../components/animate';

// const StyledRoot = styled(Box)(({ theme }) => ({
//   backgroundImage: 'url("/assets/background/banner2.png")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   padding: theme.spacing(10, 0),
//   [theme.breakpoints.up('md')]: {
//     height: 50,
//     padding: 0,
//   },
//   minHeight: '50vh',
// }));

// const ContentContainer = styled(Container)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   textAlign: 'center',
//   paddingTop: theme.spacing(8),
//   paddingBottom: theme.spacing(8),
// }));

// export default function ExperienceHome() {
//   return (
//     <StyledRoot>
//       <ContentContainer>
//         <Container component={MotionContainer}>
//           <Box
//             sx={{
//               bottom: { md: 80 },
//               position: { md: 'absolute' },
//               textAlign: { xs: 'center', md: 'unset' },
//             }}
//           >
//             <div>
//               <Stack
//                 spacing={2}
//                 display="inline-flex"
//                 direction="row"
//                 sx={{ color: 'common.white' }}
//               >
//                 <TextAnimate text="Welcome" />
//                 <TextAnimate text="to" />
//                 <TextAnimate text="My" />
//                 <TextAnimate text="Professional" />
//                 <TextAnimate text="Showcase" />
//               </Stack>
//             </div>
//           </Box>
//         </Container>
//         <div>
//           <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
//             <TextAnimate text="Welcome" />
//             <TextAnimate text="to" />
//             <TextAnimate text="My" />
//             <TextAnimate text="Professional" />
//             <TextAnimate text="Showcase" />
//           </Stack>
//         </div>
//         {/* <Typography sx={{ color: 'common.white' }} variant="h3" gutterBottom>
//           Welcome to My Professional Showcase!
//         </Typography> */}
//         <m.div variants={varFade().inRight}>
//           <Typography
//             variant="h6"
//             sx={{
//               mt: 5,
//               color: 'common.white',
//               fontWeight: 'fontWeightMedium',
//             }}
//           >
//             I have successfully collaborated with cross-functional teams to design and develop
//             responsive and intuitive web applications. My strong attention to detail and
//             problem-solving skills have allowed me to tackle complex challenges and deliver elegant
//             solutions
//           </Typography>
//         </m.div>
//       </ContentContainer>
//     </StyledRoot>
//   );
// }
// function TextAnimate({ text, variants, sx, ...other }) {
//   return (
//     <Box
//       component={m.div}
//       sx={{
//         typography: 'h1',
//         overflow: 'hidden',
//         display: 'inline-flex',
//         ...sx,
//       }}
//       {...other}
//     >
//       {text.split('').map((letter, index) => (
//         <m.span key={index} variants={variants || varFade().inUp}>
//           {letter}
//         </m.span>
//       ))}
//     </Box>
//   );
// }

// TextAnimate.propTypes = {
//   sx: PropTypes.object,
//   text: PropTypes.string,
//   variants: PropTypes.object,
// };

import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// theme
import { bgGradient } from 'src/theme/css';
import { MotionContainer, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function FaqsHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/images/faqs/hero.jpg',
        }),
        height: { md: 560, lg: 400 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            // bottom: { md: 80 },
            top: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <div>
            <TextAnimate
              text="WELCOME..."
              sx={{ color: 'primary.main' }}
              variants={varFade().inRight}
            />
            <br />

            <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white' }}>
              <TextAnimate text="To" />
              <TextAnimate text="My" />
              <TextAnimate text="Professional" />
              <TextAnimate text="Showcase" />
            </Stack>
          </div>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
