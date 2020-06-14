import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import moment from 'moment';

import Layout from '../../components/Layout';
import initContentfulService from '../../service/contentful';

import styles from './post.module.scss';

moment.locale('ar');

const Post = ({ article }) => {
  const {
    title,
    body,
    readingTimeInMinutes,
    discipline,
    authors,
    publishDate,
  } = article;

  return (
    <Layout>
      <div className={styles.article_header_container}>
        <div className={styles.article_header}>
          <div className={styles.discipline_text}>
            {discipline.disciplineName}
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.info_row}>
            <div className={styles.info_label}>
              {' '}
              مدة القراءة:{' '}
              <span className={styles.info_value}>
                {readingTimeInMinutes} دقائق{' '}
              </span>
            </div>
          </div>
          <div className={styles.info_row}>
            <div className={styles.info_label}>
              المحررين:{' '}
              <span className={styles.info_value}>
                {authors
                  .filter((author) => !author.isLinguistic)
                  .map((author, index) =>
                    index === authors.length ? author.name : `${author.name} /`
                  )}
              </span>
            </div>
          </div>
          <div className={styles.info_row}>
            <div className={styles.info_label}>
              المدققين اللغويين:{' '}
              <span className={styles.info_value}>
                {authors
                  .filter((author) => author.isLinguistic)
                  .map((author) => author.name)}
              </span>
            </div>
          </div>
          <div className={styles.info_row}>
            <div className={styles.info_label}>
              تحريراً في {moment(publishDate).format('LL')}
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }} />
      </div>
      <div className={styles.article_container}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </Layout>
  );
};

// This gets called at build time
export async function getStaticProps({ ...ctx }) {
  const client = initContentfulService();
  const { slug } = ctx.params; // params contains the post `slug`.
  const article = await client.getArticleBySlug(slug);

  return {
    props: {
      article: {
        ...article,
        body: documentToHtmlString(article.body),
      },
    },
  };
}

export async function getStaticPaths() {
  const client = initContentfulService();
  const slugs = await client.getArticlesSlugs();
  const paths = slugs.map((slug) => `/post/${slug}`); // create paths with `slug` param

  return {
    paths,
    fallback: false,
  };
}

export default Post;
