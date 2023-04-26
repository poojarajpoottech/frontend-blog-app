import PropTypes from 'prop-types';
import { paramCase } from 'change-case';

// next
import NextLink from 'next/link';
// @mui
// import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Typography, CardContent, Stack, Link } from '@mui/material';

import { PATH_DASHBOARD } from '../../routes/paths';

import useResponsive from '../../hooks/useResponsive';
// utils
import { fDate } from '../../utils/formatTime';
import { fShortenNumber } from '../../utils/formatNumber';
// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';
import TextMaxLine from '../../components/text-max-line';
// import SvgColor from '../../components/svg-color';

BlogPostCard.propTypes = {
  index: PropTypes.number,
  post: PropTypes.object,
};

export default function BlogPostCard({ post, index }) {
  const { cover, title, view, createdAt } = post;

  return (
    <Card>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box sx={{ height: 100, width: 250, marginLeft: '10px' }}>
          <Image style={{ borderRadius: '5px' }} alt="cover" src={cover} />
        </Box>
        <PostContent title={title} view={view} createdAt={createdAt} />
      </div>
    </Card>
  );
}

// ----------------------------------------------------------------------

PostContent.propTypes = {
  view: PropTypes.number,
  index: PropTypes.number,
  title: PropTypes.string,
  createdAt: PropTypes.string,
};

export function PostContent({ title, view, createdAt, index }) {
  const isDesktop = useResponsive('up', 'md');
  const linkTo = PATH_DASHBOARD.blog.view(paramCase(title));
  const latestPostLarge = index === 0;

  const latestPostSmall = index === 1 || index === 2;

  const POST_INFO = [{ id: 'view', value: view, icon: 'eva:eye-fill' }];

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        ...((latestPostLarge || latestPostSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
        }),
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <Link component={NextLink} href={linkTo} color="inherit">
        <TextMaxLine
          variant={isDesktop && latestPostLarge ? 'h5' : 'subtitle2'}
          line={2}
          persistent
        >
          {title}
        </TextMaxLine>
      </Link>

      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: 3,
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {POST_INFO.map((info) => (
          <Stack
            key={info.id}
            direction="row"
            alignItems="center"
            sx={{ typography: 'caption', ml: info.id === 'comment' ? 0 : 1.5 }}
          >
            <Iconify icon={info.icon} width={16} sx={{ mr: 0.5 }} />
            {fShortenNumber(info.value)}
          </Stack>
        ))}
      </Stack>
    </CardContent>
  );
}
