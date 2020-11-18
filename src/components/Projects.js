import Arrow from './assets/Arrow';
import useMediaQuery from '../hooks/useMediaQuery';
import { projects } from '../data';
import { Heading } from './SkillsStyles';
import {
  Container,
  Showcase,
  Case,
  Cover,
  Info,
  Paragraph,
  Button,
} from './ProjectsStyles';

const Projects = () => {
  const mQuery = useMediaQuery();

  return (
    <Container>
      <Heading>PROJECTS</Heading>
      <Showcase>
        {projects.map((project) => (
          <Case key={project.title}>
            <Cover image={project.image}></Cover>
            <Info>
              <Paragraph>{project.title}</Paragraph>
              <Button>
                <Arrow desktop={mQuery.matches} />
              </Button>
            </Info>
          </Case>
        ))}
      </Showcase>
    </Container>
  );
};

export default Projects;
