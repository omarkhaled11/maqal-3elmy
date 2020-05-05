import Layout from '../components/Layout';
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard';
import initContentfulService from '../service/contentful';
import { theme } from '../theme';

const Home = ({ articles }) => {
  return (
    <Layout>
      <Container>
        {
          articles.map(article => (
            <ArticleCard article={article} />
          ))
        }
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  padding: ${theme.metrics.m3};
`

export const getStaticProps = async (ctx) => {
  const client = initContentfulService();
  const articles = await client.getArticles();

  return {
    props: {
      articles,
    }
  };
};

export default Home;
