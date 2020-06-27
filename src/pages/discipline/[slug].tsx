import Head from 'next/head';

import Layout from '../../components/Layout';
import initContentfulService from '../../service/contentful';
import ArticleList from '../../components/ArticleList';

import styles from './discipline.module.scss';

const Discipline = ({ disciplineData }) => {
  const {
    discipline: { disciplineName, description },
    articles,
  } = disciplineData;
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
      <div>
        <div className={styles.article_header_container}>
          <div className={styles.article_header}>
            <div className={styles.title}>{disciplineName}</div>
            <div className={styles.description}>{description}</div>
          </div>
          <div className={styles.article_header_left} />
        </div>
        <div className={styles.list_container}>
          <ArticleList articles={articles} />
        </div>
      </div>
    </Layout>
  );
};
// This gets called at build time
export async function getStaticProps({ ...ctx }) {
  const client = initContentfulService();
  const { slug } = ctx.params; // params contains the discipline `slug`.
  const disciplineData = await client.getDisciplineWithArticles(slug);

  return {
    props: {
      disciplineData,
    },
  };
}

export async function getStaticPaths() {
  const client = initContentfulService();
  const slugs = await client.getDisciplinesSlugs();
  const paths = slugs.map((slug) => `/discipline/${slug}`); // create paths with `slug` param

  return {
    paths,
    fallback: false,
  };
}

export default Discipline;
