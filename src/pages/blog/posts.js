import orderBy from 'lodash/orderBy';
import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import { Button, Grid, Container, Stack, Typography } from '@mui/material';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { SkeletonPostItem } from '../../components/skeleton';

import { useSettingsContext } from '../../components/settings';

import Iconify from '../../components/iconify';
import MainLayout from '../../layouts/main';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../sections/blog';
import axios from '../../utils/axios';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

BlogPostsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default function BlogPostsPage() {
  const { themeStretch } = useSettingsContext();

  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  const sortedPosts = applySortBy(posts, sortBy);

  const getAllPosts = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/posts');
      setPosts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  const handleChangeSortBy = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <Head>
        <title> Blog: Posts | UnboxHub</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Typography
          variant="h4"
          sx={{
            my: { xs: 3, md: 5 },
          }}
        >
          Blog
        </Typography>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch />
          <BlogPostsSort sortBy={sortBy} sortOptions={SORT_OPTIONS} onSort={handleChangeSortBy} />
        </Stack>

        <Grid container spacing={3}>
          {(!posts.length ? [...Array(12)] : sortedPosts).map((post, index) =>
            post ? (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
                <BlogPostCard post={post} index={index} />
              </Grid>
            ) : (
              <SkeletonPostItem key={index} />
            )
          )}
        </Grid>
        {posts.length > 2 && (
          <Stack
            alignItems="center"
            sx={{
              mt: 8,
              mb: { xs: 10, md: 10 },
            }}
          >
            <Button
              size="large"
              variant="outlined"
              startIcon={<Iconify icon="svg-spinners:12-dots-scale-rotate" width={24} />}
            >
              Load More
            </Button>
          </Stack>
        )}
        <Stack>
          <Pagination
            count={posts.length}
            sx={{
              mb: 8,
              [`& .${paginationClasses.ul}`]: {
                justifyContent: 'center',
              },
            }}
          />
        </Stack>
      </Container>
    </>
  );
}

const applySortBy = (posts, sortBy) => {
  if (sortBy === 'latest') {
    return orderBy(posts, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    return orderBy(posts, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    return orderBy(posts, ['view'], ['desc']);
  }
  return posts;
};
