import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
const glob = require('glob');

const Post = () => {
  return (
    <Layout>
      <PageContainer>
        {/* <h1>{frontmatter.title}</h1>
        <img
            src={frontmatter.hero_image}
            width={700}
            alt={frontmatter.title}
          />
        <ReactMarkdown source={markdownBody} /> */}
      </PageContainer>
    </Layout>
  );
}

// This gets called at build time
// export async function getStaticProps({ ...ctx }) {
//   const { slug } = ctx.params; // params contains the post `slug`.

//   const config = await import(`../../data/config.json`)
//   // If the route is /blog/post-title, slug is post-title
//   const rawMarkdown = await import(`../../posts/${slug}.md`)

//   // parse markdown data, not to html yet
//   // const parsedMarkdown = matter(rawMarkdown.default);

//   return {
//     props: {
//       siteTitle: config.title,
//       // frontmatter: parsedMarkdown.data,
//       // markdownBody: parsedMarkdown.content,
//     },
//   }
// }

// export async function getStaticPaths() {
//   //get all .md files in the posts dir
//   const posts = glob.sync('src/posts/**/*.md')

//   //remove path and extension to leave filename only
//   const postsSlugs = posts.map(file =>
//     file
//       .split('/')[2]
//       .replace(/ /g, '-')
//       .slice(0, -3)
//       .trim()
//   )

//   // create paths with `slug` param
//   const paths = postsSlugs.map(slug => `/blog/${slug}`)

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default Post;
