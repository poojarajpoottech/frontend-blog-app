import { Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://www.freecodecamp.org/news/content/images/2021/08/html.png',
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://www.freecodecamp.org/news/content/images/2021/08/html.png',
  },
  // Add more project objects as needed
];

const ProjectCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const ProjectImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
}));

export default function ProjectsPage() {
  return (
    <Grid container spacing={3}>
      {projectsData.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProjectCard>
            <ProjectImage src={project.image} alt={project.title} />
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" align="center">
                {project.description}
              </Typography>
            </CardContent>
          </ProjectCard>
        </Grid>
      ))}
    </Grid>
  );
}
