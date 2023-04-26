function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '';

export const PATH_AUTH = {
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
};
export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  about: '/about-us',
  contact: '/contact-us',
  posts: '/blog/posts',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  registerUnprotected: '/auth/register-unprotected',
  loginUnprotected: '/auth/login-unprotected',
  logout: '/auth/logout-user',
  HomePricingPlans: '/HomePricingPlans',
};
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  blog: {
    root: path('/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
  },
};
