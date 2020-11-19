import Arrow from './assets/Arrow';
import Github from './assets/Github';
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
  Buttons,
  Link,
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
              <Buttons>
                <Link
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <Github desktop={mQuery} />
                </Link>
                <Link
                  href={project.demo}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Demo'
                >
                  <Arrow desktop={mQuery} />
                </Link>
              </Buttons>
            </Info>
          </Case>
        ))}
      </Showcase>
    </Container>
  );
};

export default Projects;
