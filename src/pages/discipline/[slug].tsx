import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import moment from 'moment';
import Head from 'next/head';

import Layout from '../../components/Layout';
import initContentfulService from '../../service/contentful';

const Discipline = () => {
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
      <div></div>
    </Layout>
  );
};

// export async function getStaticProps({ ...ctx }) {
//   const client = initContentfulService();
//   const { discipline } = ctx.params; // params contains the post `slug`.
//   const article = await client.getDisciplinesSlugs(discipline);

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

export default Discipline;
