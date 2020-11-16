import Header from './components/Header';
import Skills from './components/Skills';
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
        </Container>
      </Layout>
    </>
  );
};

export default App;
