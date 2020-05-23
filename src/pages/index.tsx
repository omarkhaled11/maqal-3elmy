import Layout from '../components/Layout';
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard';
import Jumbotron from '../components/home/Jumbotron';
import initContentfulService from '../service/contentful';
import { theme } from '../theme';

const Home = ({ articles }) => {
  return (
    <Layout>
      <Jumbotron />
        {
          articles.map(article => (
            <ArticleCard article={article} />
          ))
        }
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  padding: ${theme.metrics.m3};
  flex-direction: row;
  flex-wrap: wrap;
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
