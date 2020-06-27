import Head from 'next/head';

import initContentfulService from '../service/contentful';

import Layout from '../components/Layout';

import styles from './editors.module.scss';

const editors = ({ authors: { disciplines } }) => {
  return (
    <Layout>
      <Head>
        <title>مقال علمي</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>

      {disciplines.map((discipline) => {
        return (
          <div className={styles.content}>
            <h1 className={styles.discipline_title}>
              {discipline?.disciplineName}
            </h1>
            <div className={styles.authors_list}>
              {discipline.authors.map((author) => {
                return (
                  <div className={styles.author_card}>
                    <img
                      className={styles.author_image}
                      src={author?.authorImage?.fields?.file?.url}
                      alt=""
                    />
                    <span className={styles.author_name}>{author?.name}</span>
                    <span className={styles.author_title}>{author?.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  const client = initContentfulService();
  const authors = await client.getAuthorsList();

  return {
    props: {
      authors,
    },
  };
};

export default editors;
