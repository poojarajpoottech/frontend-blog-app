// routes
import { PATH_PAGE, PATH_DASHBOARD } from '../../../routes/paths';

// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  {
    title: 'Contact',
    icon: <Iconify icon="mdi:user-box-multiple" />,
    path: PATH_PAGE.contact,
  },
  {
    title: 'About',
    icon: <Iconify icon="mdi:about" />,
    path: PATH_PAGE.about,
  },

  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'FAQs', path: PATH_PAGE.faqs },
          { title: 'Experience', path: PATH_PAGE.comingSoon },
          { title: 'Projects', path: PATH_PAGE.comingSoon },
          { title: 'Certificates', path: PATH_PAGE.comingSoon },
        ],
      },
      {
        subheader: 'Authentication',
        items: [
          { title: 'Register', path: PATH_PAGE.registerUnprotected },
          { title: 'Login', path: PATH_PAGE.loginUnprotected },
        ],
      },
      {
        subheader: 'sourcecode plans',
        items: [{ title: 'Pricing Plans', path: PATH_PAGE.HomePricingPlans }],
      },
      {
        subheader: 'Blogs',
        items: [
          { title: 'Posts', path: PATH_DASHBOARD.blog.posts },
          { title: 'Post', path: PATH_DASHBOARD.blog.demoView },
        ],
      },
    ],
  },
  {
    title: 'Help',
    icon: <Iconify icon="mdi:information" />,
    path: PATH_PAGE.help,
  },
];

export default navConfig;
