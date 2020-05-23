import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import initContentfulService from '../../service/contentful';

const Post = ({ article }) => {
  const { title, body } = article;

  return (
    <Layout>
      <PageContainer>
        <h1>{title}</h1>
        <br /><br />
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </PageContainer>
    </Layout>
  );
}

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
  }
}

export async function getStaticPaths() {
  const client = initContentfulService();
  const slugs = await client.getSlugs();
  const paths = slugs.map(slug => `/blog/${slug}`)  // create paths with `slug` param

  return {
    paths,
    fallback: false,
  }
}

export default Post;
