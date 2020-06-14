import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import moment from 'moment';

import Layout from '../../components/Layout';
import initContentfulService from '../../service/contentful';

const Editor = () => {
  return (
    <Layout>
      <div></div>
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
