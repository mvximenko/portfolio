import {
  Container,
  Heading,
  Layout,
  Skill,
  Icon,
  Logo,
  Paragraph,
} from './SkillsStyles';

const data = [
  { background: '#ffd9c7', color: '#ff7231', logo: 'C', skill: 'CSS-in-JS' },
  { background: '#ffefb3', color: '#fac500', logo: 'JS', skill: 'JavaScript' },
  { background: '#e1c8ef', color: '#8132ad', logo: 'R', skill: 'Redux' },
  { background: '#ccd5ff', color: '#4263ff', logo: 'TS', skill: 'TypeScript' },
  { background: '#b6edde', color: '#32c89f', logo: 'V', skill: 'Vue' },
  { background: '#b8e8fa', color: '#2cbcf0', logo: 'R', skill: 'React' },
];

const Skills = () => (
  <Container>
    <Heading>WHAT I LIKE</Heading>
    <Layout>
      {data.map((i) => (
        <Skill key={i.skill}>
          <Icon background={i.background}>
            <Logo color={i.color}>{i.logo}</Logo>
          </Icon>
          <Paragraph>{i.skill}</Paragraph>
        </Skill>
      ))}
    </Layout>
  </Container>
);

export default Skills;
