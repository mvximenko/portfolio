import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { GlobalStyle } from './GlobalStyle';
import { Layout, Container } from './AppStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container>
          <Header />
          <Skills />
          <Projects />
        </Container>
      </Layout>
    </>
  );
};

export default App;
