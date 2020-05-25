import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../theme';

const ArticleCard = ({ article }) => {
  const { title, slug, discipline, readingTimeInMinutes } = article;
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <CardContainer>
        <Discipline>{discipline.disciplineName}</Discipline>
        <Title>{title}</Title>
        <InfoRow>
            <InfoLabel>مدة القراءة:</InfoLabel>
            <InfoValue> {readingTimeInMinutes} دقائق </InfoValue>
          </InfoRow>
      </CardContainer>
    </Link>
  );
}

const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${theme.metrics.smallMargin};
  border: 1px solid ${theme.colors.secondary};
  width: ${theme.dimensions.imageWidth};
  margin-bottom: ${theme.metrics.m3};
  word-wrap: break-word;
  :hover {
    cursor: pointer;
    border-color: ${theme.colors.themeRed};
    span {
      color: ${theme.colors.themeRed};
    }
  };
`

const Title = styled.span`
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.primary};
`

const Discipline = styled.span`
  padding-bottom: ${theme.metrics.m1};
  font-size: ${theme.fonts.small};
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
`

const InfoRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: ${theme.metrics.m2};
`;

const InfoLabel = styled.span`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.primary};
`;

const InfoValue = styled.span`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fonts.small};
  color: ${theme.colors.primary};
  padding-right: ${theme.metrics.m1};
`;

// const ImageBackground = styled.div`
//   height: ${theme.dimensions.imageHeight};
//   width: ${theme.dimensions.imageWidth};
//   background-image: url("https://image.shutterstock.com/image-photo/forest-road-under-sunset-sunbeams-260nw-228722404.jpg");
// `

export default ArticleCard;
