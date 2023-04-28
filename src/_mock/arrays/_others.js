import _mock from '../_mock';

// ----------------------------------------------------------------------
export const _carouselsMembers = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
  avatar: `/assets/images/portraits/portraits_${index + 1}.jpg`,
}));

export const _faqs = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: _mock.text.title(index),
  detail: _mock.text.description(index),
}));

// ----------------------------------------------------------------------

export const _skills = [...Array(3)].map((_, index) => ({
  label: ['Backend Development', 'Frontend Development', 'UI/UX Design'][index],
  value: _mock.number.percent(index),
}));

// ----------------------------------------------------------------------

export const _mapContact = [
  {
    latlng: [33, 65],
    address: _mock.address.fullAddress(1),
    phoneNumber: _mock.phoneNumber(1),
  },
  {
    latlng: [-12.5, 18.5],
    address: _mock.address.fullAddress(2),
    phoneNumber: _mock.phoneNumber(2),
  },
];

export const _socials = [
  {
    value: 'facebook',
    name: 'FaceBook',
    icon: 'eva:github-fill',
    color: '#1877F2',
    path: 'https://github.com/designwithsatya',
  },
  {
    value: 'instagram',
    name: 'Instagram',
    icon: 'ant-design:instagram-filled',
    color: '#E02D69',
    path: 'https://www.instagram.com/designwithsatya',
  },
  {
    value: 'linkedin',
    name: 'Linkedin',
    icon: 'eva:linkedin-fill',
    color: '#007EBB',
    path: 'https://www.linkedin.com/in/satyendra-singh-48ba751b7',
  },
  {
    value: 'youtube',
    name: 'youtube',
    icon: 'fa:youtube-play',
    color: '#007EBB',
    path: 'https://www.youtube.com/watch?v=OXWCzLpcGN4',
  },
  {
    value: 'twitter',
    name: 'Twitter',
    icon: 'eva:twitter-fill',
    color: '#00AAEC',
    path: 'https://twitter.com/designwithsatya',
  },
];
