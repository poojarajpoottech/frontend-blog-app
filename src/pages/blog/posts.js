import orderBy from 'lodash/orderBy';
import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Button, Grid, Container, Stack } from '@mui/material';

import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
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
        <title> Blog: Posts | designwithsatya</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Blog Tutorial"
          links={[
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'Blog',
              href: '/blog/posts',
            },
            {
              name: 'Posts',
            },
          ]}
          action={
            <Button
              component={NextLink}
              href=""
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Post
            </Button>
          }
        />
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch />
          <BlogPostsSort sortBy={sortBy} sortOptions={SORT_OPTIONS} onSort={handleChangeSortBy} />
        </Stack>
        <Grid container spacing={3} mb={20}>
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
