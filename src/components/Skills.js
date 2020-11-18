import { skills } from '../data';
import {
  Container,
  Heading,
  Layout,
  Skill,
  Icon,
  Logo,
  Paragraph,
} from './SkillsStyles';

const Skills = () => (
  <Container>
    <Heading>WHAT I LIKE</Heading>
    <Layout>
      {skills.map((skill) => (
        <Skill key={skill.skill}>
          <Icon background={skill.background}>
            <Logo color={skill.color}>{skill.logo}</Logo>
          </Icon>
          <Paragraph>{skill.skill}</Paragraph>
        </Skill>
      ))}
    </Layout>
  </Container>
);

export default Skills;
