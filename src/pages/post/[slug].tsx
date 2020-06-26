import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import moment from 'moment';

import Layout from '../../components/Layout';
import ArticleHeader from '../../components/article/ArticleHeader';
import initContentfulService from '../../service/contentful';

import styles from './post.module.scss';

moment.locale('ar');

const Post = ({ article }) => {
  const { body } = article;
  return (
    <Layout>
      <ArticleHeader article={article} />
      <div className={styles.article_body_container}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </Layout>
  );
};

// This gets called at build time
export async function getStaticProps ({ ...ctx }) {
  const client = initContentfulService();
  const { slug } = ctx.params; // params contains the post `slug`.
  const article = await client.getArticleBySlug(slug);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p>${next(node.content)}</p><br />`
    }
  };

  return {
    props: {
      article: {
        ...article,
        body: documentToHtmlString(article.body, options),
      },
    },
  };
}

export async function getStaticPaths () {
  const client = initContentfulService();
  const slugs = await client.getArticlesSlugs();
  const paths = slugs.map(slug => `/post/${slug}`); // create paths with `slug` param

  return {
    paths,
    fallback: false,
  };
}

export default Post;
