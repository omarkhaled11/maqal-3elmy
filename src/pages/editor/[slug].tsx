import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import moment from 'moment';
import Head from 'next/head';

import Layout from '../../components/Layout';
import initContentfulService from '../../service/contentful';
import Divider from '../../components/Divider';
import ArticleCard from '../../components/ArticleCard';

import styles from './editor.module.scss';

const Editor = ({ author }) => {
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
      <div className={styles.container}>
        <div className={styles.profile}>
          <img
            className={styles.image}
            src={author?.authorImage?.fields?.file?.url}
            alt=""
          />
          <div className={styles.name}>{author?.name}</div>
          <div className={styles.country}>مصر</div>
          {/* author?.country */}
          <div className={styles.title}>{author?.title}</div>
          <Divider text="مشاركات المحرر" size="small" />
          <div className={styles.articleList}>
            {author?.authorArticles?.map((entry) => (
              <ArticleCard maxWidth article={entry?.fields} />
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>السيرة الذاتية</h1>
          <div className={styles.text}>{author?.shortBio}</div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const client = initContentfulService();
  const { slug } = ctx.params; // params contains the post `slug`.
  const author = await client.getAuthorBySlug(slug);
  console.log(author)
  return {
    props: {
      author: {
        ...author,
        body: documentToHtmlString(author.body),
      },
    },
  };
}

export async function getStaticPaths() {
  const client = initContentfulService();
  const slugs = await client.getAuthorsSlugs();
  const paths = slugs.map((slug) => `/editor/${slug}`); // create paths with `slug` param

  return {
    paths,
    fallback: false,
  };
}

export default Editor;
