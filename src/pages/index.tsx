import Layout from '../components/Layout';
import Jumbotron from '../components/home/Jumbotron';
import initContentfulService from '../service/contentful';
import Divider from '../components/Divider';
import ArticleList from '../components/ArticleList';

import ArticleArtworkList from '../components/home/ArticleArtworkList';

const Home = ({ articles, landingArticles }) => {
  const { mainArticle } = landingArticles;
  const { firstArticle, secondArticle, thirdArticle, fourthArticle } = landingArticles;
  const artworkArticles = [firstArticle, secondArticle, thirdArticle, fourthArticle].filter(x => x);
  const { moreArticleList} = landingArticles;
  return (
    <>
        <Jumbotron article={mainArticle} fullHeight />
        <ArticleArtworkList articles={artworkArticles} />
      <Layout>
        <Divider href="new_articles" text="صدر حديثا" />
        <ArticleList articles={moreArticleList} />
      </Layout>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const client = initContentfulService();
  const articles = await client.getArticles();
  const landingArticles = await client.getLandingPage();

  return {
    props: {
      articles,
      landingArticles,
    },
  };
};

export default Home;
