import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const PostLink = props => (
  <li>
    <Link href="/blog/[slug]" as={`/blog/${props.slug}`}>
      <a>{props.slug}</a>
    </Link>
  </li>
);

const Home = ({ slugs }) => {
  return (
    <Layout>
      <Title>My Blog</Title>
      <br />
      <ul>
        {
          slugs.map(slug => (
            <PostLink slug={slug} />
          ))
        }
      </ul>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/posts-info')
  const posts = await res.json()

  return {
    props: {
      slugs: posts.map(post => post.slug),
    }
  };
};

export default Home;
