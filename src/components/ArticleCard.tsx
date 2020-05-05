import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../theme';

const ArticleCard = ({ article }) => {
  const { title, slug } = article;
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <CardContainer>
        <ImageBackground />
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </Link>
  );
}

const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: ${theme.metrics.m2};
  border: 1px solid ${theme.colors.border};
  width: ${theme.dimensions.imageWidth};
  margin-right: ${theme.metrics.m3};
  margin-bottom: ${theme.metrics.m3};
  word-wrap: break-word;
  :hover {
    cursor: pointer;
  };
`

const CardTitle = styled.p`
  padding: ${theme.metrics.m1};
  font-size: ${theme.fonts.large};
`

const ImageBackground = styled.div`
  height: ${theme.dimensions.imageHeight};
  width: ${theme.dimensions.imageWidth};
  background-image: url("https://image.shutterstock.com/image-photo/forest-road-under-sunset-sunbeams-260nw-228722404.jpg");
`

export default ArticleCard;
