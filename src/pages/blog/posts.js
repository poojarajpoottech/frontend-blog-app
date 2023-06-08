import orderBy from 'lodash/orderBy';
import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Button, Grid, Container, Stack, Pagination } from '@mui/material';

import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { SkeletonPostItem } from '../../components/skeleton';

import { useSettingsContext } from '../../components/settings';
import { PATH_DASHBOARD } from '../../routes/paths';

import Iconify from '../../components/iconify';
import MainLayout from '../../layouts/main';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../sections/blog';
import axios from '../../utils/axios';

import { AppFeatured } from '../../sections/home';
import UserProfilePage from './profile';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

const _appFeatured = [
  {
    id: 1,
    image: '/assets/images/banner/banner_2.jpg',
    title: 'Latest Update',
    description: 'UX',
  },
  {
    id: 2,
    image: '/assets/images/banner/banner_3.jpg',
    title: 'Latest Update',
    description: 'demo',
  },
  {
    id: 3,
    image: '/assets/images/banner/banner_4.jpg',
    title: 'Latest Update',
    description: 'demo',
  },
  {
    id: 4,
    image: '/assets/images/banner/banner_5.jpg',
    title: 'Latest Update',
    description: 'Update',
  },
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
        <AppFeatured list={_appFeatured} />
        <UserProfilePage />
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
              href={PATH_DASHBOARD.blog.new}
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
        <Stack>
          <Pagination
            count={posts.length}
            sx={{
              my: 5,
              ml: 0,
              mr: { xs: 'auto', md: 0 },
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
