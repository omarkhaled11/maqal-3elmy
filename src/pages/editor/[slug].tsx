import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import moment from 'moment';

import Layout from '../../components/Layout';
import initContentfulService from '../../service/contentful';
import Divider from '../../components/Divider';
import ArticleCard from '../../components/ArticleCard';

import styles from './editor.module.scss';

const Editor = ({ author }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div>
            <img src={author.authorImage.fields.file.url} alt="" />
          </div>
          <div className={styles.name}>{author.name}</div>
          <div className={styles.title}>{author.title}</div>

          <Divider text="مشاركات المحرر" size="small" />

          <div>
            {author.authorArticles.map((entry) => (
              <ArticleCard article={entry.fields} />
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <div>{author.shortBio}</div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const client = initContentfulService();
  const { slug } = ctx.params; // params contains the post `slug`.
  const author = await client.getAuthorBySlug(slug);

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
