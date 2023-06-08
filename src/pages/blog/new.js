// next
import Head from 'next/head';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// layouts
import DashboardLayout from '../../layouts/main';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// sections
import BlogNewPostForm from '../../sections/blog/BlogNewPostForm';

// ----------------------------------------------------------------------

BlogNewPostPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function BlogNewPostPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Blog: New Post | Designwithsatya</title>
      </Head>

      <Container sx={{ mb: 10 }} maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Create a new post"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Blog',
              href: PATH_DASHBOARD.blog.root,
            },
            {
              name: 'Create',
            },
          ]}
        />

        <BlogNewPostForm />
      </Container>
    </>
  );
}
