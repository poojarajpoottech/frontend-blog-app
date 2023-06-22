import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import Image from '../../components/image';

const experienceData = [
  {
    title: 'Frontend Developer',
    company: 'JMZ Technologies',
    date: 'January 2019 - February 2021',
    description:
      'Experienced React frontend developer at JMZ Technologies for 2 years, successfully delivering numerous projects with expertise in UI development.',
    image: '/assets/company/jmz.png',
  },
  {
    title: 'React Developer',
    company: 'Titan Company Limited',
    date: 'March 2022 - present',
    description:
      'React developer at Titan Company since 29-03-2023, delivering impactful projects and contributing to frontend development with expertise in React.',
    image: '/assets/company/titan.png',
  },
];

const ExperienceCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  position: 'relative',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const CompanyImage = styled(CardMedia)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: '50%',
  marginBottom: theme.spacing(2),
}));

const RightSymbol = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

export default function ExperiencePage() {
  return (
    <Grid container spacing={3}>
      {experienceData.map((experience, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <ExperienceCard>
            <RightSymbol>
              <Image
                src="/assets/company/blue-tick.svg"
                alt="Image"
                sx={{ mx: 'auto', width: 48, height: 48 }}
              />
            </RightSymbol>
            <CompanyImage image={experience.image} alt={experience.company} />
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                {experience.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" align="center">
                {experience.company}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" align="center" gutterBottom>
                {experience.date}
              </Typography>
              <Typography variant="body2" align="center">
                {experience.description}
              </Typography>
            </CardContent>
          </ExperienceCard>
        </Grid>
      ))}
    </Grid>
  );
}
