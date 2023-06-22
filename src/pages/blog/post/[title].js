import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Stack, Container, Typography, Box, Button } from '@mui/material';
import { PATH_DASHBOARD } from '../../../routes/paths';
import axios from '../../../utils/axios';
import MainLayout from '../../../layouts/main';
import Markdown from '../../../components/markdown';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
import { SkeletonPostDetails } from '../../../components/skeleton';
import { BlogPostHero, BlogPostCard } from '../../../sections/blog';
import Iconify from '../../../components/iconify';
import EmptyContent from '../../../components/empty-content';
import HeadTitle from '../../../components/HeadTitle';

BlogPostPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function BlogPostPage() {
  const {
    query: { title },
  } = useRouter();

  const [recentPosts, setRecentPosts] = useState([]);

  const [post, setPost] = useState(null);

  const [loadingPost, setLoadingPost] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const getPost = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/post', {
        params: { title },
      });

      setPost(response.data);
      setLoadingPost(false);
    } catch (error) {
      console.error(error);
      setLoadingPost(false);
      setErrorMsg(error.message);
    }
  }, [title]);

  const getRecentPosts = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title },
      });

      setRecentPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [title]);

  useEffect(() => {
    getRecentPosts();
  }, [getRecentPosts]);

  useEffect(() => {
    if (title) {
      getPost();
    }
  }, [getPost, title]);

  const renderError = (
    <Container sx={{ my: 10 }}>
      <EmptyContent
        filled
        title={`${errorMsg?.message}`}
        action={
          <Button
            component=""
            href={PATH_DASHBOARD.root}
            startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
            sx={{ mt: 3 }}
          >
            Back to List
          </Button>
        }
        sx={{ py: 10 }}
      />
    </Container>
  );

  const renderPost = post && (
    <>
      <BlogPostHero post={post} />
      <Container
        maxWidth={false}
        sx={{
          py: 3,
          mb: 5,
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <CustomBreadcrumbs
          links={[
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'Blog',
              href: PATH_DASHBOARD.root,
            },
            {
              name: post?.title,
            },
          ]}
          sx={{ maxWidth: 720, mx: 'auto' }}
        />
      </Container>
      <Container maxWidth={false}>
        <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
          <Typography variant="subtitle1" sx={{ mb: 5 }}>
            {post.description}
          </Typography>
          <Markdown
            children={post.body}
            sx={{
              px: { md: 5 },
            }}
          />
        </Stack>
      </Container>
    </>
  );

  const renderLatestPosts = (
    <>
      <Typography variant="h4" sx={{ my: 5 }}>
        Recent posts
      </Typography>

      <Box
        sx={{ mb: 5 }}
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {recentPosts.slice(recentPosts.length - 4).map((recentPost) => (
          <BlogPostCard key={recentPost.id} post={recentPost} />
        ))}
      </Box>
    </>
  );

  return (
    <>
      <HeadTitle title={`Blog: ${post?.title || ''} | DWS`} />
      {loadingPost ? SkeletonPostDetails : <>{errorMsg ? renderError : renderPost}</>}

      <Container sx={{ pb: 15 }}>{!!recentPosts.length && renderLatestPosts}</Container>
    </>
  );
}
