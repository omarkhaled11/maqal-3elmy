import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

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
          <img
            className={styles.image}
            src={author?.authorImage?.fields?.file?.url}
            alt=""
          />
          <div className={styles.name}>{author?.name}</div>
          <div className={styles.country}>{author?.country}</div>
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
          <div dangerouslySetInnerHTML={{ __html: author?.bio }} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const client = initContentfulService();
  const { slug } = ctx.params; // params contains the post `slug`.
  const author = await client.getAuthorBySlug(slug);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p>${next(node.content)}</p><br />`
    }
  };

  return {
    props: {
      author: {
        ...author,
        bio: documentToHtmlString(author.bio, options),
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
