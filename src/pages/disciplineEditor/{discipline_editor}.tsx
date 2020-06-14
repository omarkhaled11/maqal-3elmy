import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import moment from 'moment';

import Layout from '../../components/Layout';
import initContentfulService from '../../service/contentful';

const DisciplineEditor = () => {
  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

// export async function getStaticProps({ ...ctx }) {
//   const client = initContentfulService();
//   const { slug } = ctx.params; // params contains the post `slug`.
//   const article = await client.getAuthorBySlug(slug);

//   return {
//     props: {
//       article: {
//         ...article,
//         body: documentToHtmlString(article.body),
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const client = initContentfulService();
//   const slugs = await client.getArticlesSlugs();
//   const paths = slugs.map((slug) => `/blog/${slug}`); // create paths with `slug` param

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default DisciplineEditor;
