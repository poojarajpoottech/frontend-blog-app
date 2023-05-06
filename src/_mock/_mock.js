import { sub } from 'date-fns';
//
import {
  role,
  title,
  percent,
  country,
  boolean,
  fullName,
  description,
  fullAddress,
} from './assets';

// ----------------------------------------------------------------------

const _mock = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,

  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => boolean[index],
  role: (index) => role[index],

  address: {
    fullAddress: (index) => fullAddress[index],
    country: (index) => country[index],
  },
  name: {
    fullName: (index) => fullName[index],
  },
  text: {
    title: (index) => title[index],
    description: (index) => description[index],
  },
  number: {
    percent: (index) => percent[index],
  },
  image: {
    cover: (index) =>
      `https://api-dev-minimal-v4.vercel.app/assets/images/covers/cover_${index + 1}.jpg`,
    product: (index) =>
      `https://api-dev-minimal-v4.vercel.app/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index) =>
      `https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
};

export default _mock;
