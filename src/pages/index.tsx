import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import Jumbotron from '../components/home/Jumbotron';
import initContentfulService from '../service/contentful';
import Divider from '../components/Divider';

import styles from './index.module.scss';

const Home = ({ articles }) => {
  return (
    <Layout>
      <div className={styles.teaser}>
        <Jumbotron />
      </div>
      <div>
        <Divider text="صدر حديثا" />
        <div className={styles.articles}>
          {/* <ArticleList /> */}
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  const client = initContentfulService();
  const articles = await client.getArticles();

  return {
    props: {
      articles,
    },
  };
};

export default Home;
