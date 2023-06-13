import React, { useState } from 'react';
import { Grid, Card, CardMedia, Container, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from '../../components/iconify/Iconify';
import { MotionViewport } from '../../components/animate';

const videos = [
  'https://www.youtube.com/watch?v=I0dKicNMhug&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&start_radio=1&rv=LXHgb9EQUGQ',
  'https://www.youtube.com/watch?v=lrPAqnRdIgk&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&index=5',
  'https://www.youtube.com/watch?v=dl-HCf4TBqk&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&index=10',
  'https://www.youtube.com/watch?v=Uq4_ktYwhsY&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&start_radio=1&rv=lrPAqnRdIgk',
  'https://www.youtube.com/watch?v=a2YvFABolF8&list=RDGMEM2j3yRsqu_nuzRLnHd2bMVA&start_radio=1&rv=mOJK8RQPlbY',

  // Add more YouTube video IDs here
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: '0',
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
}));

const StyledIframe = styled('iframe')({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  border: 'none',
});

export default function YouTubeVideo() {
  const [displayedVideos, setDisplayedVideos] = useState(3);
  const videosPerPage = 3;

  const handleLoadMore = () => {
    setDisplayedVideos(displayedVideos + videosPerPage);
  };

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 5 },
          }}
        >
          <Typography component="div" variant="overline">
            Popular YouTube Video
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {videos.slice(0, displayedVideos).map((videoId, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <StyledCardMedia>
                  <StyledIframe
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Video ${index + 1}`}
                  />
                </StyledCardMedia>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        {videos.length > displayedVideos && (
          <Stack
            alignItems="center"
            sx={{
              mt: 8,
              mb: { xs: 5, md: 2 },
            }}
          >
            <Button
              size="large"
              variant="outlined"
              startIcon={<Iconify icon="svg-spinners:12-dots-scale-rotate" width={24} />}
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </Stack>
        )}
      </Container>
    </StyledRoot>
  );
}
