import Layout from '../components/Layout';
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard';
import initContentfulService from '../service/contentful';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = ({ articles }) => {
  return (
    <Layout>
      <Title>My Blog</Title>
      <br />
      <ul>
        {
          articles.map(article => (
            <ArticleCard article={article} />
          ))
        }
      </ul>
    </Layout>
  );
}

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
