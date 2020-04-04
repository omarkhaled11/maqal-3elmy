// import { useRouter } from 'next/router';
import matter from "gray-matter";
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout';

const Post = ({ post, data}) => {
  // const router = useRouter();

  return (
    <Layout>
      <h1>{data.title}</h1>
      <ReactMarkdown source={post} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/posts-info')
  const posts = await res.json()
  const paths = posts.map(post => `/blog/${post.slug}`);

  return {
    paths,
    fallback: false
  };
};

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `slug`.
  // If the route is like /posts/post-title, then params.slug is post-title
  const res = await fetch(`http://localhost:3000/api/post/${params.slug}`)
  const markdownWithMetadata = await res.json()

  const parsedMarkdown = matter(markdownWithMetadata.body);
  const { data, content } = parsedMarkdown;
  
  // Pass post data to the page via props
  return { props: { post: content, data } }
}

export default Post;
