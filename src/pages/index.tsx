import Head from 'next/head';

import Layout from '../components/Layout';
import Jumbotron from '../components/home/Jumbotron';
import initContentfulService from '../service/contentful';
import Divider from '../components/Divider';
import ArticleList from '../components/ArticleList';

import styles from './index.module.scss';

const Home = ({ articles, disciplines }) => {
  return (
    <Layout>
      <Head>
        <title>مقال علمي </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className={styles.teaser}>
        <Jumbotron />
      </div>
      <div>
        <Divider text="صدر حديثا" />
        <ArticleList articles={articles} />
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
