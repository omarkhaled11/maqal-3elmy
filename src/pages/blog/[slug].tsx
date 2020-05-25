import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import initContentfulService from '../../service/contentful';
import { theme } from '../../theme';

const Post = ({ article }) => {
  const { title, body } = article;

  return (
    <Layout>
      <ArticleHeaderContainer>
        <ArticleHeader>
          <DisciplineText>الذكاء الاصطناعي</DisciplineText>
          <TitleText>{title}</TitleText>
        </ArticleHeader>
        <div style={{ flex: 1 }} />
      </ArticleHeaderContainer>
      <BodyContainer>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </BodyContainer>
    </Layout>
  );
}

const ArticleHeaderContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  overflow: auto;
  padding-right: ${theme.metrics.m5};
  padding-left: ${theme.metrics.m5};
  padding-top: ${theme.metrics.m3};
  padding-bottom: ${theme.metrics.m5};
  margin-top: ${theme.metrics.m5};
  -moz-box-shadow: 25px 0 22px -45px rgba(233, 75, 60, 0.8);
  -webkit-box-shadow: 25px 0 22px -45px rgba(233, 75, 60, 0.8);
  box-shadow: 30px 0 48px -60px rgba(233, 75, 60, 0.8);
`;

const ArticleHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  border-bottom: 1px solid red;
  padding-bottom: ${theme.metrics.m4};
`;

const DisciplineText = styled.span`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.metrics.m2};
`;

const TitleText = styled.span`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fonts.h4};
  color: ${theme.colors.themeRed};
`;

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  overflow: auto;
  padding-right: ${theme.metrics.m5};
  padding-left: ${theme.metrics.m5};
  margin-left: ${theme.metrics.m5};
  padding-bottom: ${theme.metrics.m5};
  p {
    font-size: ${theme.fonts.medium};
    line-height: ${theme.metrics.baseMargin};
  }
`;

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
