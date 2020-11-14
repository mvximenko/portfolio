import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import { Layout, Container } from './AppStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container>
          <Header />
        </Container>
      </Layout>
    </>
  );
};

export default App;
