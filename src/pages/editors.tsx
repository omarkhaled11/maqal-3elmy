import Link from 'next/link';

import initContentfulService from '../service/contentful';

import Layout from '../components/Layout';
import { DEFAULT_PROFILE_IMAGE } from '../data/constants';

import styles from './editors.module.scss';

const editors = ({ authors: { disciplines } }) => {
  return (
    <Layout>
      {disciplines.map((discipline) => {
        return (
          <div className={styles.content}>
            <h1 className={styles.discipline_title}>
              {discipline?.disciplineName}
            </h1>
            <div className={styles.authors_list}>
              {discipline.authors.map((author, index) => {
                return (
                  <Link href={author.slug ? `/editor/${author.slug}` : `#`}>
                    <a className={styles.author_card} key={index}>
                      <img
                        className={styles.author_image}
                        src={author?.authorImage?.fields?.file?.url || DEFAULT_PROFILE_IMAGE}
                        alt=""
                      />
                      <span className={styles.author_name}>{author?.name}</span>
                      <span className={styles.author_title}>
                        {author?.title}
                      </span>
                    </a>
                  </Link>
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
