import { useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import HeadTitle from '../../components/HeadTitle';
import MainLayout from '../../layouts/main';
// components
import Iconify from '../../components/iconify';

UserProfilePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function UserProfilePage() {
  const [currentTab, setCurrentTab] = useState('profile');

  const TABS = [
    {
      value: 'React JS',
      label: 'React',
      icon: <Iconify icon="ic:round-account-box" />,
    },
    {
      value: 'JavaScript',
      label: 'JavaScript',
      icon: <Iconify icon="eva:heart-fill" />,
    },
    {
      value: 'Next',
      label: 'Next',
      icon: <Iconify icon="eva:people-fill" />,
    },
    {
      value: 'Node',
      label: 'Node JS',
      icon: <Iconify icon="ic:round-perm-media" />,
    },
    {
      value: 'HTML5',
      label: 'HTML5',
      icon: <Iconify icon="ic:round-account-box" />,
    },
    {
      value: 'CSS3',
      label: 'CSS3',
      icon: <Iconify icon="eva:heart-fill" />,
    },
    {
      value: 'GITHUB',
      label: 'GITHUB',
      icon: <Iconify icon="eva:people-fill" />,
    },
    {
      value: 'TypeScript',
      label: 'TypeScript',
      icon: <Iconify icon="ic:round-perm-media" />,
    },
    {
      value: 'Material UI',
      label: 'Material UI',
      icon: <Iconify icon="eva:people-fill" />,
    },
    {
      value: 'Angular',
      label: 'Angular',
      icon: <Iconify icon="ic:round-perm-media" />,
    },
    {
      value: 'Gitlab',
      label: 'Gitlab',
      icon: <Iconify icon="eva:people-fill" />,
    },
    {
      value: 'Latest',
      label: 'Latest',
      icon: <Iconify icon="ic:round-perm-media" />,
    },
    {
      value: 'Motivation',
      label: 'Motivation',
      icon: <Iconify icon="eva:people-fill" />,
    },
    {
      value: 'Technical',
      label: 'Technical',
      icon: <Iconify icon="ic:round-perm-media" />,
    },
  ];

  return (
    <>
      <HeadTitle title=" User: Profile" />

      <Tabs
        value={currentTab}
        onChange={(event, newValue) => setCurrentTab(newValue)}
        sx={{
          width: 1,
          bottom: 0,
          zIndex: 9,
          mb: 2,
          bgcolor: 'background.paper',
          '& .MuiTabs-flexContainer': {
            pr: { md: 3 },
            justifyContent: {
              sm: 'center',
              md: 'center',
            },
          },
        }}
      >
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
        ))}
      </Tabs>

      {TABS.map((tab) => tab.value === currentTab && <Box key={tab.value}> {tab.component} </Box>)}
    </>
  );
}
